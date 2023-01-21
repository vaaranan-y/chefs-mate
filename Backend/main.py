# main.py
from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel
import cohere
import config


co = cohere.Client(config.COHERE_API_KEY)


class UserChoice(BaseModel):
    userName: str
    choice: str
    restrictions: str


class Alternatives(BaseModel):
    userName: str
    alts: Optional[str] = None


app = FastAPI()


@app.get("/test/{}")
async def root():
    return {"message": "Chef's Mate Test"}


@app.post("/testCohere/")
async def testCohere(choice: UserChoice):

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
        max_tokens=100,
        temperature=0.9,
        k=0,
        p=0.75,
        frequency_penalty=0,
        presence_penalty=0,
        stop_sequences=["--"],
        return_likelihoods="NONE",
    )

    alts = {
        "name": choice.userName,
        "choice": choice.choice,
        "response": response.generations[0].text,
    }
    return alts


# @app.get("/testYelp/")
# async def testCohere(choice : UserChoice):
#     location="Toronto"
#     rawChoice="Turkey Burger"
#     choice = rawChoice.replace(" ", "%20")
#     radius="1500"
#     openNow="false"
#     api_url = "https://api.yelp.com/v3/businesses/search?location=" + location + "&term=" + choice + "&radius=" + 1500 + "&categories=&price=1&open_now=false&sort_by=rating&limit=20"


#     return "hello"
