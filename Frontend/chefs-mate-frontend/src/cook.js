import React from "react";
// import "./cook.css"
import image from "./5.png";
import { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

function Cookpage(food) {
  const [recipes, setRecipes] = useState([]);

  const { state } = useLocation();

  useEffect(() => {
    let bodyParams = {
      userName: state.userName,
      choice: state.choice,
    };

    axios.post(`http://127.0.0.1:8000/recipe`, bodyParams).then((res) => {
      console.log(res);
      setRecipes(res.data.response);
    });
  }, []);

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
      {!!recipes &&
        recipes.map((recipe) => (
          <div>
            <img src={recipe.image} />
            <h1>{recipe.title}</h1>
            <p>{recipe.summary}</p>
            <a href={recipe.sourceUrl}>Link to recipe</a>
          </div>
        ))}
    </div>
  );
}
export default Cookpage;
