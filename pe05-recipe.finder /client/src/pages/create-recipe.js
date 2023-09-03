
// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// export const CreateRecipe = () => {
//   const [recipe, setRecipe] = useState({
//     name: "",
//     ingredients: [],
//     instructions: "",
//     imageUrl: "",
//     cookingTime: 0,
//   });

//   const navigate = useNavigate();

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setRecipe({ ...recipe, [name]: value });
//   };

//   const handleIngredientChange = (event, index) => {
//     const { value } = event.target;
//     const ingredients = [...recipe.ingredients];
//     ingredients[index] = value;
//     setRecipe({ ...recipe, ingredients });
//   };

//   const handleAddIngredient = () => {
//     const ingredients = [...recipe.ingredients, ""];
//     setRecipe({ ...recipe, ingredients });
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       await axios.post("http://localhost:3001/recipes", { ...recipe });
//       alert("Recipe Created");
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <div className="container">
//       <div className="create-recipe">
//         <h2>Create Recipe</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="name">Name of the recipe:</label>
//           <input
//             type="text"
//             id="name"
//             name="name"
//             value={recipe.name}
//             onChange={handleChange}
//           />
//           <label htmlFor="ingredients">Ingredients:</label>
//           {recipe.ingredients.map((ingredient, index) => (
//             <input
//               key={index}
//               type="text"
//               name="ingredients"
//               value={ingredient}
//               onChange={(event) => handleIngredientChange(event, index)}
//             />
//           ))}
//           <button type="button" onClick={handleAddIngredient}>
//             Add Ingredient
//           </button>
//           <label htmlFor="instructions">Instructions:</label>
//           <textarea
//             id="instructions"
//             name="instructions"
//             value={recipe.instructions}
//             onChange={handleChange}
//           ></textarea>
//           <label htmlFor="imageUrl">Image URL:</label>
//           <input
//             type="text"
//             id="imageUrl"
//             name="imageUrl"
//             value={recipe.imageUrl}
//             onChange={handleChange}
//           />
//           <label htmlFor="cookingTime">Cooking Time (minutes)</label>
//           <input
//             type="number"
//             id="cookingTime"
//             name="cookingTime"
//             value={recipe.cookingTime}
//             onChange={handleChange}
//           />
//           <button className="create-recipe-button" type="submit">
//             Create Recipe
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


export const CreateRecipe = () => {
  const [recipe, setRecipe] = useState({
    name: "",
    ingredients: [],
    instructions: "",
    imageUrl: "",
    cookingTime: 0,
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRecipe({ ...recipe, [name]: value });
  };

  const handleIngredientChange = (event, index) => {
    const { value } = event.target;
    const ingredients = [...recipe.ingredients];
    ingredients[index] = value;
    setRecipe({ ...recipe, ingredients });
  };

  const handleAddIngredient = () => {
    const ingredients = [...recipe.ingredients, ""];
    setRecipe({ ...recipe, ingredients });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/recipes", { ...recipe });
      alert("Recipe Created");
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="create-recipe">
        <h2>Create Recipe</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name of the recipe:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={recipe.name}
            onChange={handleChange}
          />
          <label htmlFor="ingredients">
            Ingredients:
            {recipe.ingredients.map((ingredient, index) => (
              <input
                key={index}
                type="text"
                name="ingredients"
                value={ingredient}
                onChange={(event) => handleIngredientChange(event, index)}
              />
            ))}
            <button type="button" onClick={handleAddIngredient}>
              Add Ingredient
            </button>
          </label>
          <label htmlFor="instructions">Instructions:</label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="imageUrl">Image URL:</label>
          <input
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={recipe.imageUrl}
            onChange={handleChange}
          />
          <label htmlFor="cookingTime">Cooking Time (minutes):</label>
          <input
            type="number"
            id="cookingTime"
            name="cookingTime"
            value={recipe.cookingTime}
            onChange={handleChange}
          />
          <button className="create-recipe-button" type="submit">
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};
