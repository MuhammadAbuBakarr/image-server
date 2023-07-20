const Project = require("../models/projects");
exports.checkProjectId = async (req, res, next) => {
 try {
  const project = await Project.findOne(req.params);
  if (!project) {
   return res.status(404).json({ error: true, message: "Project not Existed, Image not Uploaded" });
  }
  req.projectId = req.params.projectId;
  next();
 } catch (e) {
  console.log(e);
 }
};
