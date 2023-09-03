import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://adobo123:manila123@adobo.v2otfaj.mongodb.net/myRecipes?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.listen(3000, () => console.log("Server started"));
