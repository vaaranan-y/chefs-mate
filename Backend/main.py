# main.py
from typing import Optional
import json
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import cohere
import config
import requests
import recipe_api

co = cohere.Client(config.COHERE_API_KEY)


class UserChoice(BaseModel):
    userName: str
    choice: str
    restrictions: str


class UserTakeOut(BaseModel):
    userName: str
    rawChoice: str
    restrictions: str
    location: str
    radius: str
    openNow: str
    budget: int


class Alternatives(BaseModel):
    userName: str
    alts: Optional[str] = None


class Recipes(BaseModel):
    userName: str
    choice: str


app = FastAPI()
origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/test/")
async def root():
    return {"message": "Chef's Mate Test"}


@app.post("/cohere/generate")
async def generate_alternative(choice: UserChoice):

    response = co.generate(
        model="command-xlarge-nightly",
        prompt=f"""This program produces healthier alternatives for different foods.\n
        The input is the food.\n
        This program will generate 5 different options that are not exactly the same as the input food.\n
        Each of these options should be a healthier alternative to the input food.\n
        Healthier alternatives include foods with less processed sugars, less cholesterol, less trans fats, more nutrients, and more fruits and vegetables.\n
        Generate 5 different alternative healthier food options for the input in list format separated by a comma.\n
        Don't output the same option twice. Don't output the ingredient as an option. Don't include \"-\" in the output \n
        Don't include the description of the food in the output.
        Healthier food options must satisfy the following restrictions: {choice.restrictions}.\n
        --\n
        Input: Pizza\n
        Output: Bagel with Tomatoes, Portobello Caps and Hummus, Meatballs on Tortillas, Kale Chips and White Sauce, Whole Wheat Pita Bread Pizza\n
        --\n
        Input: Soda\n
        Output: water, milk, juice, tea, coffee\n
        --\n
        Input: hamburger\n
        Output: Grilled Portobello Mushroom Burger, Sweet Potato–Veggie Burgers with Avocado, Big Veg Quinoa Burger, Sweet and Smoky Beet Burgers, Black Bean Burgers\n
        --\n
        Input: chips\n
        Output: Baked Potato Chips, Carrot Chips, Kale Chips, Sweet Potato Chips, Zucchini Chips\n
        --\n
        Input: sandwich\n
        Output: Cucumber and avocado sandwich, grilled chicken and tomato sandwich, tuna and cucumber sandwich, turkey and avocado sandwich, vegetarian hummus and tomato sandwich\n
        --\n
        Input: Hot dogs\n
        Output: Bun-less chili dog, healthy dogs with avocado, carrot, and celery sticks, chili and cheese dog, coleslaw and chili dog, Dietitian-approved grilled chicken dog\n
        --\n
        Input: donuts\n
        Output: Apple slices with cinnamon and honey, Greek yogurt with berries and honey, mixed berry smoothie, oatmeal with nuts and honey, quinoa and fruit salad\n
        --\n
        Input: {choice.choice}\n
        Output:""",
        max_tokens=120,
        temperature=0,
        k=0,
        p=0.75,
        frequency_penalty=0,
        presence_penalty=0,
        stop_sequences=["--"],
        return_likelihoods="NONE",
    )

    output = response.generations[0].text
    if output[-2:] == "--":
        output = output[:-2]
    output = output.split(",")

    for i in range(len(output)):
        output[i] = output[i].strip()

    alts = {
        "name": choice.userName,
        "choice": choice.choice,
        "response": output,
    }
    return alts


@app.get("/testYelp/")
async def testYelp(userTakeOut: UserTakeOut):
    api_url = "https://api.yelp.com/v3/businesses/search?location=Toronto&term=Turkey%20Burger&radius=1500&categories=&price=1&open_now=false&sort_by=rating&limit=20"
    headers = {
        "accept": "application/json",
        "Authorization": "Bearer " + config.YELP_API_KEY,
    }
    response = requests.get(api_url, headers=headers)
    return json.loads(response.text)


@app.get("/getRelevantRestaurants/")
async def getRelevantRestaurants(userTakeOut: UserTakeOut):
    budgetLevel = "1"
    if userTakeOut.budget < 10:
        budgetLevel = "1"
    elif userTakeOut.budget >= 10 and userTakeOut.budget < 25:
        budgetLevel = "2"
    else:
        budgetLevel = "3"
    api_url = (
        "https://api.yelp.com/v3/businesses/search?location="
        + userTakeOut.location
        + "&term="
        + userTakeOut.rawChoice.replace(" ", "%20")
        + "&radius="
        + userTakeOut.radius
        + "&categories=&price="
        + budgetLevel
        + "&open_now=false&sort_by=rating&limit=20"
    )
    headers = {
        "accept": "application/json",
        "Authorization": "Bearer " + config.YELP_API_KEY,
    }

    rawResponse1 = requests.get(api_url, headers=headers)
    rawResponse2 = json.loads(rawResponse1.text)
    finalResponse = {"restaurants": []}

    for restaurant in rawResponse2["businesses"]:
        print(restaurant)
        finalResponse["restaurants"].append(
            {
                "name": restaurant["name"],
                "image": restaurant["image_url"],
                "rating": restaurant["rating"],
                "location": restaurant["location"]["display_address"][0],
                "phoneNumber": restaurant["display_phone"],
            }
        )

    return finalResponse


@app.get("/recipe/")
async def getRecipe(recipes: Recipes):
    return recipe_api.getRecipe(recipes.choice)
