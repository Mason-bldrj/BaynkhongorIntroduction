import { model, models, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";

const resourcesSchema = new Schema({
  name: String,
  img: String,
});
const resourcesModel =
  models.resources || model(COLLECTIONS.RESOURCES, resourcesSchema);
export default resourcesModel;
