import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const legalitySchema = new Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  link: String,
  legalityType: {
    enum: ["LAW", "RULES", "RESOLUTION", "COMMAND", "CONSENT"],
  },
});

const LegalityModel =
  models.legality || model(COLLECTIONS.LEGALITY, legalitySchema);
export default LegalityModel;
