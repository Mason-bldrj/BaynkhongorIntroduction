// Institution
import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const institutionSchema = new Schema({
  institutionType: {
    enum: [
      "SERVICE",
      "VACATION",
      "TOUR",
      "MUSEUM",
      "CHURCH0",
      "UNION",
      "CLUB",
      "THEATER",
    ],
    required: true,
  },
  name: { type: String, required: true },
  description: { type: String, required: true },
  img: String,
  phoneNumbers: {
    phoneNumber1: { type: Number, required: true },
    phoneNumber2: Number,
  },
  time: [
    {
      enum: ["SUMMER", "WINTER"],
      day: String,
      opentime: String,
      closedTime: String,
    },
  ],
  price: [
    {
      amount: {
        enum: [
          "ADULT",
          "CHILD",
          "STUDENT",
          "TOURIST",
          "TAKE_PHOTO",
          "RECORDING",
        ],
        amount: Number,
      },
    },
  ],
});

const InstitutionModel =
  models.institution || model(COLLECTIONS.INSTITUTION, institutionSchema);
export default InstitutionModel;
