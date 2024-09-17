import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const offersSchema = new Schema({
<<<<<<< HEAD
  offers: {
    name: { type: String, required: true },
    img: String,
    count: Number,
  },
=======
  offerCount: Number,
  offer: [
    {
      name: { type: String, required: true },
      img: String,
      count: Number,
    },
  ],
  visitedNumber: Number,
>>>>>>> main
});

const OffersModel = models.offer || model(COLLECTIONS.OFFERS, offersSchema);
export default OffersModel;
