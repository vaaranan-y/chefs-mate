import requests
import config
import json

base_url = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes"


def getRecipe(food):

    querystring = {
        "query": food,
        "instructionsRequired": "true",
        "addRecipeInformation": "true",
        "maxReadyTime": "20",
        "ignorePantry": "true",
        "sort": "calories",
        "sortDirection": "asc",
        "offset": "0",
        "number": "3",
        "limitLicense": "false",
        "ranking": "2",
    }

    headers = {
        "X-RapidAPI-Key": config.RECIPE_API_KEY,
        "X-RapidAPI-Host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
    }

    response = requests.request(
        "GET", base_url + "/complexSearch", headers=headers, params=querystring
    )

    response = json.loads(response.text)

    output = []
    for recipe in response["results"]:
        output.append(
            {
                "title": recipe["title"],
                "image": recipe["image"],
                "sourceUrl": recipe["sourceUrl"],
                "author": recipe["sourceName"],
                "cookingMinutes": recipe["preparationMinutes"]
                + recipe["cookingMinutes"],
                "calories": recipe["nutrition"]["nutrients"][0]["amount"],
                "price": recipe["pricePerServing"],
            }
        )
    return output


if __name__ == "__main__":
    print(getRecipe("Grilled Portobello Mushroom Burger"))
