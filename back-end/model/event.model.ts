import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  img: { type: String, required: true },
});

const eventModel = models.event || model(COLLECTIONS.EVENT, eventSchema);
export default eventModel;
