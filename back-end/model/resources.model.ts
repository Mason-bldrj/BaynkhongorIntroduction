import { model, models, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";

const resourcesSchema = new Schema({
  name: String,
  img: String,
  description: String,
  category: { type: String, default: "resources" },
});
const resourcesModel =
  models.resources || model(COLLECTIONS.RESOURCES, resourcesSchema);
export default resourcesModel;
