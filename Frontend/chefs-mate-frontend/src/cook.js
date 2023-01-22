import React from "react";
// import "./cook.css"
import image from './5.png';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

function Cookpage(food) {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    const { state } = useLocation();

    useEffect(() => {
        let bodyParams = {
            userName: "Matthew",
            choice: state.choice,
        };

        axios.post(`http://127.0.0.1:8000/recipe`, bodyParams).then((res) => {
            console.log(res.data);
            setRecipes(res.data);
            setLoading(false);
        });
    }, []);

    return (
			<>
				{/* <div
					className="Container"
					style={{
						backgroundImage: `url(${image})`,
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						backgroundSize: 'cover',
					}}
				> */}
					<div
						className="Recipes"
						style={{
							display: 'flex',
							'flex-wrap': 'wrap',
							marginTop: '200px',
							justifyContent: 'center',
							alignItems: 'center',
							sborder: 'solid 1px #000',
						}}
					>
						{!!recipes &&
							recipes.map((recipe) => (
								<div
									className="Recipes-Item"
									style={{
										flex: '1 1 300px',
										padding: '20px',
										margin: '10px',
									}}
								>
									<img src={recipe.image} />
									<h1>{recipe.title}</h1>
									<p>{recipe.summary}</p>
									<p>calories: {recipe.calories}</p>
									<p>cookingMinutes: {recipe.cookingMinutes} mins</p>
									<p>price: {recipe.price}</p>
									<a href={recipe.sourceUrl}>{recipe.author}</a>
								</div>
							))}
					</div>
				{/* </div> */}
			</>
		);
}
export default Cookpage;
