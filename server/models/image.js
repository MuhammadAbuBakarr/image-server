const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const imageSchema = new mongoose.Schema({
 userId: { type: String, required: true, default: uuid() },
 url: { type: String, required: true },
 size: { type: Number, required: true },
 date: { type: Date, required: true, default: Date.now() },
 projectId: { type: String, required: false },
});

const MongoImage = mongoose.model("image", imageSchema);
module.exports = MongoImage;
