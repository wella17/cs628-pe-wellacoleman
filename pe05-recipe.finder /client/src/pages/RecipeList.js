import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get("http://localhost:3001/recipes");
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div>
      <h1 className="recipe-list-heading">Recipe List</h1>
      <ul className="recipe-list">
        {recipes.map((recipe) => (
          <li key={recipe._id} className="recipe">
            <Link to={`/recipe-details/${recipe._id}`} className="recipe-link">
              {recipe.name}
            </Link>{" "}
            - Cooking Time: {recipe.cookingTime} minutes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;
