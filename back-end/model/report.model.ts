import { model, models, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";

const reportSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: String,
  description: String,
  url: String,
  category: { type: String, default: "report" },
});
const ReportModel = models.report || model(COLLECTIONS.REPORT, reportSchema);
export default ReportModel;
