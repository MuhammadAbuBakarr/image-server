const mongoose = require("mongoose");
const { v4: uuid } = require("uuid");

const projectSchema = new mongoose.Schema({
 projectName: { type: String, required: true, unique: true },
 projectId: { type: String, required: true },
 userId: { type: String, required: true },
 createdAt: { type: Date, default: Date.now },
});

const Project = mongoose.model("project", projectSchema);
module.exports = Project;
