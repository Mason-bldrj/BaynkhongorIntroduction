import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const travelSchema = new Schema({
  name: { type: String, required: true },
  img: String,
  date: Date,
  travelType: {
    type: String,
    required: true,
    enum: ["LocalTravel", "INTERNAL_TRAVEL", "FOREIGN_TRAVEL"],
  },
  description: String,
});

const TravelModel = models.travel || model(COLLECTIONS.TRAVEL, travelSchema);
export default TravelModel;
