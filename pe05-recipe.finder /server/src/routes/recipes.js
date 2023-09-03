import express from "express";
import mongoose from "mongoose";
import { RecipesModel } from "../models/Recipes.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const result = await RecipesModel.find({});
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  const recipe = new RecipesModel({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    image: req.body.image,
    ingredients: req.body.ingredients,
    instructions: req.body.instructions,
    imageUrl: req.body.imageUrl,
    cookingTime: req.body.cookingTime,
  });

  try {
    const result = await recipe.save();
    res.status(201).json({
      createdRecipe: {
        name: result.name,
        image: result.image,
        ingredients: result.ingredients,
        instructions: result.instructions,
        _id: result._id,
      },
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:recipeId", async (req, res) => {
  try {
    const result = await RecipesModel.findById(req.params.recipeId);
    if (!result) {
      res.status(404).json({ message: "Recipe not found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:recipeId", async (req, res) => {
  try {
    const updatedRecipe = {
      name: req.body.name,
      image: req.body.image,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions,
      imageUrl: req.body.imageUrl,
      cookingTime: req.body.cookingTime,
    };

    const result = await RecipesModel.findByIdAndUpdate(
      req.params.recipeId,
      updatedRecipe,
      { new: true }
    );

    if (!result) {
      res.status(404).json({ message: "Recipe not found" });
    } else {
      res.status(200).json(result);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:recipeId", async (req, res) => {
  try {
    const result = await RecipesModel.findByIdAndDelete(req.params.recipeId);
    if (!result) {
      res.status(404).json({ message: "Recipe not found" });
    } else {
      res.status(200).json({ message: "Recipe deleted successfully" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

export { router as recipesRouter };
