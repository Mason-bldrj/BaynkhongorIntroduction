import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const aboutUsSchema = new Schema({
  numericalIndicators: {
    natureMonument: Number,
    memorialPlaceNumber: Number,
    groundKM_Number: Number,
    population: Number,
    teamsNumber: Number,
    wardNumber: Number,
  },
  name: {
    type: String,
    reqiured: true,
  },
  email: {
    type: String,
    required: true,
  },
  phoneNumbers: {
    phoneNumber1: {
      type: Number,
      required: true,
    },
    phoneNumber2: Number,
  },
  offerNumber: Number,
  mainImg: String,
  about: String,
  aboutOffice: String,
  porpose: String,
  objective: String,
});

const AboutUsModel =
  models.aboutUs || model(COLLECTIONS.ABOUTUS, aboutUsSchema);
export default AboutUsModel;
