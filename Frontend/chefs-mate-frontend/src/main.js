import React from "react";
import image from "./3.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MainPage(userName) {
  const [food, setFood] = useState("");
  const [restrictions, setRestrictions] = useState("");
  const [suggestions, setSuggestions] = useState();
  const [suggestionsReady, setSuggestionsReady] = useState(false);
  const navigate = useNavigate();

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
        height: "100vh",
        backgroundColor: "#FFDE59",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <form>
          <div>
            <label>
              <p>What are you craving?</p>

              <input
                type="text"
                onChange={(input) => {
                  console.log(input.target.value);
                  setFood(input.target.value);
                }}
              />
            </label>
          </div>

          <tr></tr>
          <div>
            <label>
              <p>Dietary Restrictions?</p>

              <input
                type="text"
                onChange={(input) => {
                  console.log(input.target.value);
                  setFood(input.target.value);
                }}
              />
            </label>
          </div>
          <br />
          <br />
          <br />

          <button onClick={submitUserChoice}>
            GENERATE SOME HEALTHY ALTERNATIVES!
          </button>
          {suggestionsReady &&
            suggestions.map((suggestion) => {
              return (
                <div
                  style={{
                    backgroundColor: "#f3c200",
                    padding: "20px",
                    margin: "10px",
                    borderRadius: "10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    navigate('../menu.js', {
											state: {
												useName: userName,
												choice: suggestion,
											},
										});
                  }}
                >
                  {suggestion}
                </div>
              );
            })}
        </form>
      </div>
    </div>
  );
}
export default MainPage;
