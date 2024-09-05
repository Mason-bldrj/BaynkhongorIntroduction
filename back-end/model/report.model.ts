import { model, models, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";

const reportSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: Date,
  description: String,
});
const ReportModel = models.report || model(COLLECTIONS.REPORT, reportSchema);
export default ReportModel;
