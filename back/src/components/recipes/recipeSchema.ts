import { Int32 } from "mongodb";
import { Schema, model } from "mongoose";

const RecipeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    ingredients: {
      type: String,
      required: true,
    },
    preparation: {
      type: String,
      required: true,
    },
    img_url: {
      type: String,
      required: true,
    },
    cluster_label: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true,
  }
);

const RecipeModel = model("Recipe", RecipeSchema);

export { RecipeModel };
