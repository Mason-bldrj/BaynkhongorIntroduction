import { model, models, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";

const countSchema = new Schema({
  number: Number,
});
const CountModel = models.count || model(COLLECTIONS.COUNT, countSchema);
export default CountModel;
