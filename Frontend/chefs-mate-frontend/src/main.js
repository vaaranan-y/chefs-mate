import React from "react";
import image from "./3.png";
import { useState } from "react";
import axios from "axios";

function MainPage() {
  const [food, setFood] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const [suggestions, setSuggestions] = useState();
  const [suggestionsReady, setSuggestionsReady] = useState(false);

  const submitUserChoice = (e) => {
    e.preventDefault();
    console.log("here" + food);
    let bodyParams = {
      userName: "jun",
      choice: food,
      restrictions: "no sugar",
    };
    axios
      .post(`http://127.0.0.1:8000/cohere/generate`, bodyParams)
      .then((res) => {
        console.log(res.data.response);
        setSuggestions(res.data.response);
        setSuggestionsReady(true);
      });
  };

  return (
    <div
      className="Container"
      style={{
        backgroundImage: `url(${image})`,
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div style={{ padding: 100, marginLeft: 200 }}>
        <form style={{ padding: 40 }}>
          <label>
            Enter your food
            <input
              type="text"
              onChange={(input) => {
                console.log(input.target.value);
                setFood(input.target.value);
              }}
            />
          </label>
          <tr></tr>
          <label>
            Enter restrictions
            <input
              type="text"
              onChange={(input) => {
                console.log(input.target.value);
                setRestrictions(input.target.value);
              }}
            />
          </label>
          <tr></tr>
          <tr></tr>
          <button onClick={submitUserChoice}>
            Find your healthy replacement!
          </button>
        </form>
        {suggestionsReady &&
          suggestions.map((suggestion) => {
            return <p>{suggestion}</p>;
          })}
      </div>
    </div>
  );
}
export default MainPage;
