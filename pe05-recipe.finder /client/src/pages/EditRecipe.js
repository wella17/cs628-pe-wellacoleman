import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const EditRecipe = ({ navigateBack }) => {
  const { id } = useParams();
  const [editedRecipe, setEditedRecipe] = useState({
    name: "", 
    ingredients: "",
    instructions: "",
    cookingTime: 0,
    imageUrl: "",
  });

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/${id}`);
        setEditedRecipe(response.data);
      } catch (error) {
        console.error("Error fetching recipe:", error);
      }
    };
    fetchRecipe();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3001/recipes/${id}`, editedRecipe);
      navigateBack();
    } catch (error) {
      console.error("Error updating recipe:", error);
    }
  };

  return (
    <div className="edit-recipe-container">
      <h2>Edit Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name of the recipe: {/* Change title to name */}
          <input
            type="text"
            name="name" 
            value={editedRecipe.name} 
            onChange={handleInputChange}
          />
        </label>
        <label>
          Ingredients:
          <textarea
            name="ingredients"
            value={editedRecipe.ingredients}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Instructions:
          <textarea
            name="instructions"
            value={editedRecipe.instructions}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Cooking Time (minutes):
          <input
            type="number"
            name="cookingTime"
            value={editedRecipe.cookingTime}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Image URL:
          <input
            type="text"
            name="imageUrl"
            value={editedRecipe.imageUrl}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditRecipe;
