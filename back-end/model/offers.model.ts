import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const offerSchema = new Schema({
  name: { type: String, required: true },
  img: String,
  date: Date,
  travelType: {
    enum: ["LocalTravel", "INTERNAL_TRAVEL", "FOREIGN_TRAVEL"],
  },
  description: String,
});

const OfferModel = models.offer || model(COLLECTIONS.OFFER, offerSchema);
export default OfferModel;
