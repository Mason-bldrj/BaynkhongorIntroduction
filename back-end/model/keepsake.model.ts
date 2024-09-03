// Keepsake
import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const keepsakeSchema = new Schema({
  name: { type: String, required: true },
  title: String,
  description: String,
  img: { type: String, required: true },
});

const KeepsakeModel =
  models.keepsake || model(COLLECTIONS.KEEPSAKE, keepsakeSchema);
export default KeepsakeModel;
