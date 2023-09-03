// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const RecipeDetails = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState({});

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/recipes/${id}`);
//         setRecipe(response.data);
//       } catch (error) {
//         console.error("Error fetching recipe:", error);
//       }
//     };
//     fetchRecipe();
//   }, [id]);

//   const handleDelete = async () => {
//     try {
//       await axios.delete(`http://localhost:3001/recipes/${id}`);
//       window.location.href = "/"; // Redirect to home page after deleting
//     } catch (error) {
//       console.error("Error deleting recipe:", error);
//     }
//   };

//   return (
//     <div>
//       <h2>{recipe.title}</h2>
//       <p>Ingredients: {recipe.ingredients}</p>
//       <p>Instructions: {recipe.instructions}</p>
//       <button onClick={handleDelete}>Delete Recipe</button>
//     </div>
//   );
// };

// export default RecipeDetails;
// RecipeDetails.js

// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams } from "react-router-dom";

// const RecipeDetails = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState({});

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3001/recipes/${id}`);
//         setRecipe(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchRecipe();
//   }, [id]);

//   return (
//     <div>
//       <h1>Recipe Details</h1>
//       <h2>{recipe.name}</h2>
//       <p>Ingredients: {recipe.ingredients}</p>
//       <p>Instructions: {recipe.instructions}</p>
//       <p>Cooking Time: {recipe.cookingTime} minutes</p>
//       <img src={recipe.imageUrl} alt={recipe.name} />
//     </div>
//   );
// };

// export default RecipeDetails;
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`);
        setRecipe(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRecipe();
  }, [id]);

  const deleteRecipe = async () => {
    try {
      await axios.delete(`http://localhost:3001/recipes/${id}`);
      alert("Recipe deleted successfully.");
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <div className="recipe-details">
        <div className="recipe-header">
          <h1 className="recipe-title">{recipe.name}</h1>
          <div className="recipe-actions">
            <Link to={`/edit-recipe/${id}`} className="edit-button">
              Edit
            </Link>
            <button onClick={deleteRecipe} className="delete-button">
              Delete
            </button>
          </div>
        </div>
        <p>Ingredients: {recipe.ingredients}</p>
        <p>Instructions: {recipe.instructions}</p>
        <p>Cooking Time: {recipe.cookingTime} minutes</p>
        <img src={recipe.imageUrl} alt={recipe.name} />
      </div>
    </div>
  );
};

export default RecipeDetails;
