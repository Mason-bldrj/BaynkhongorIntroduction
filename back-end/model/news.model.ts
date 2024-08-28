import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const newsSchema = new Schema({
  report: {
    name: {
      type: String,
      required: true,
    },
    date: Date,
    description: String,
  },
  video: {
    name: { type: String, required: true },
    date: Date,
    url: String,
  },
  resources: {
    name: String,
    img: String,
  },
});

const NewsModel = models.news || model(COLLECTIONS.NEWS, newsSchema);
export default NewsModel;
