# main.py
from typing import Optional

from fastapi import FastAPI
from pydantic import BaseModel
import cohere


co = cohere.Client('')

class UserChoice(BaseModel):
    userName: str
    choice: str


class Alternatives(BaseModel):
    userName: str
    alts: Optional[str] = None

app = FastAPI()

@app.get("/test/{}")
async def root():
    return {"message": "Chef's Mate Test"}

@app.post("/testCohere/")
async def testCohere(choice : UserChoice):

    response = co.generate(
        model='command-xlarge-nightly',
        prompt='This program generates a list of 5 NBA players, stored in an array. The array should be in the following form:\n\n[player1, player2, player4, player5, player6]\n\nplayerx (where x is the number of the player) is the name of the player\n\n---',
        max_tokens=250,
        temperature=0.9,
        k=0,
        p=0.75,
        frequency_penalty=0,
        presence_penalty=0,
        stop_sequences=[],
        return_likelihoods='NONE')


    alts = {"name" : choice.userName, "choice" : choice.choice, "response": response.generations[0].text}
    return alts