import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const offersSchema = new Schema({
  offerCount: Number,
  offer: [
    {
      name: { type: String, required: true },
      img: String,
      count: Number,
    },
  ],
  visitedNumber: Number,
});

const OffersModel = models.offer || model(COLLECTIONS.OFFERS, offersSchema);
export default OffersModel;
