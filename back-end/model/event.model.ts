import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const eventSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: String,
  imgs: [String],
});

const eventModel = models.event || model(COLLECTIONS.EVENT, eventSchema);
export default eventModel;
