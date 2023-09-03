// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// export const Home = () => {
//   const [recipes, setRecipes] = useState([]);

//   useEffect(() => {
//     const fetchRecipes = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/recipes");
//         setRecipes(response.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchRecipes();
//   }, []);

//   const deleteRecipe = async (recipeID) => {
//     try {
//       await axios.delete(`http://localhost:3001/recipes/${recipeID}`);
//       const updatedRecipes = recipes.filter((recipe) => recipe._id !== recipeID);
//       setRecipes(updatedRecipes);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <div>
//       <div className="recipe-list">
//         {recipes.map((recipe) => (
//           <div key={recipe._id} className="recipe">
//             <div className="recipe-header">
//               <h2>{recipe.name}</h2>
//               <div className="recipe-actions">
//                 <Link to={`/edit-recipe/${recipe._id}`}>Edit</Link>
//                 <button onClick={() => deleteRecipe(recipe._id)}>Delete</button>
//               </div>
//             </div>
//             <div className="recipe-details">
//               <div className="ingredients">
//                 <p>Ingredients:</p>
//                 <ul className="ingredient-list">
//                   {recipe.ingredients.map((ingredient, index) => (
//                     <li key={index}>{ingredient}</li>
//                   ))}
//                 </ul>
//               </div>
//               <div className="instructions">
//                 <p>{recipe.instructions}</p>
//               </div>
//               <div className="image">
//                 <img src={recipe.imageUrl} alt={recipe.name} />
//               </div>
//               <div className="cooking-time">
//                 <p>Cooking Time: {recipe.cookingTime} minutes</p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };
// Home.js

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = () => {
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
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div key={recipe._id} className="recipe">
            <Link to={`/recipe-details/${recipe._id}`} className="recipe-link">
              {recipe.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
