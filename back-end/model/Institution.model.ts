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
      "CHURCH",
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
});

const InstitutionModel =
  models.institution || model(COLLECTIONS.INSTITUTION, institutionSchema);
export default InstitutionModel;
