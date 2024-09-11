import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const scenicSpotSchema = new Schema({
  name: { type: String, required: true },
  img: String,
  description: String,
});

const ScenicSpotModel =
  models.scenicspot || model(COLLECTIONS.SCENIC, scenicSpotSchema);
export default ScenicSpotModel;
