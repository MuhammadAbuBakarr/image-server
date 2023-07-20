const Project = require("../models/projects");

//  Verifying Header
exports.authHeader = async (req, res, next) => {
 const projectId = req.headers["project-id"];

 try {
  const project = await Project.findOne({ projectId: projectId });
  if (!project) {
   return res.status(404).json({ error: true, message: "Invalid Project Id" });
  }
  req.projectId = projectId;
  next();
 } catch (e) {
  console.log(e);
 }
};
