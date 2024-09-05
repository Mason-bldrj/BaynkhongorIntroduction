import { model, models, Schema } from "mongoose";
import { COLLECTIONS } from "../constant";

const videoSchema = new Schema({
  name: { type: String, required: true },
  date: Date,
  url: String,
});
const VideoModel = models.video || model(COLLECTIONS.VIDEO, videoSchema);
export default VideoModel;
