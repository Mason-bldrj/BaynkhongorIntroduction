// Institution
import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const institutionSchema = new Schema({
  institutionType: {
    type: String,
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
  description: { type: String },
  img: String,
  phoneNumbers: {
    phoneNumber1: { type: Number, required: true },
    phoneNumber2: Number,
  },
  time: [
    {
      timeType: { enum: ["SUMMER", "WINTER"], type: String, required: true },
      day: String,
      opentime: String,
      closedTime: String,
    },
  ],
  price: [
    {
      amount: {
        amountType: {
          type: String,
          enum: [
            "ADULT",
            "CHILD",
            "STUDENT",
            "TOURIST",
            "TAKE_PHOTO",
            "RECORDING",
          ],
          required: true,
        },
        amount: Number,
      },
    },
  ],
});

const InstitutionModel =
  models.institution || model(COLLECTIONS.INSTITUTION, institutionSchema);
export default InstitutionModel;
