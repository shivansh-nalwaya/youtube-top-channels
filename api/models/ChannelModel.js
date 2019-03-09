var mongoose = require("../config/mongoose");

const channel_schema = new mongoose.Schema({
  rank: { type: Number, unique: true },
  grade: String,
  channel_name: String,
  video_uploads: Number,
  subscribers: Number,
  video_views: Number
});

module.exports = mongoose.model("channels", channel_schema);
