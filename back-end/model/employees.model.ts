import { Schema, model, models } from "mongoose";
import { COLLECTIONS } from "../constant";

const employeeSchema = new Schema({
  name: { type: String, required: true },
  position: { type: String, required: true },
  phoneNumber: Number,
  links: {
    fbLink: String,
    IG_Link: String,
    twitterLink: String,
  },
});

const EmployeeModel =
  models.employee || model(COLLECTIONS.EMPLOYEE, employeeSchema);
export default EmployeeModel;
