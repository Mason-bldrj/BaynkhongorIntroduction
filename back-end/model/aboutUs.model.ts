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
  phoneNumber: {
    phoneNumber1: {
      type: Number,
      required: true,
    },
    phoneNumber2: Number,
  },

  offerNumber: Number,
  offers: [
    {
      name: { type: String, required: true },
      count: {
        type: Number,
        required: true,
      },
    },
  ],
  mainImg: String,
  about: String,
  aboutOffice: String,
  porpose: String,
  objective: String,
  employees: {
    name: { type: String, required: true },
    position: { type: String, required: true },
    phoneNumber: Number,
    links: {
      fbLink: String,
      IG_Link: String,
      twitterLink: String,
    },
  },
});

const AboutUsModel =
  models.aboutUs || model(COLLECTIONS.ABOUTUS, aboutUsSchema);
export default AboutUsModel;
