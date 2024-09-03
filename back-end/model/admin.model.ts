import { model, models, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";

const adminSchema = new Schema({
  adminName: String,
  adminEmail: String,
  adminPassword: String,
});
const AdminModel = models.admin || model(COLLECTIONS.ADMIN, adminSchema);
export default AdminModel;
