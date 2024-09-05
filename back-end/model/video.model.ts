import { model, models, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";

const videpSchema = new Schema({
  name: { type: String, required: true },
  date: Date,
  url: String,
});
const VideoModel = models.video || model(COLLECTIONS.VIDEO, videpSchema);
export default VideoModel;
