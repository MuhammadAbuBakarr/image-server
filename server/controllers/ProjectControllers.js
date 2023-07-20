const Project = require("../models/projects");
const MongoImage = require("../models/image");
// Importing Firebase Functions
const { getStorage, ref, deleteObject } = require("firebase/storage");
const { firebase } = require("../firebase/firebase");
const firebaseStorage = getStorage(firebase);

//   Creating Project
exports.createProject = async (req, res) => {
 try {
  const ProjectCreate = await Project.create({
   projectName: req.name,
   projectId: req.projectAPI,
   userId: req.userId,
  });
  if (ProjectCreate) {
   return res.status(200).json({
    API: ProjectCreate?.projectId,
    message: "New Project Created",
    name: ProjectCreate?.projectName,
   });
  }
 } catch (e) {
  console.log(e?.code);
  if (e?.code === 11000) {
   return res
    .status(400)
    .json({ error: true, message: `${req.name} is Already Taken, Please Change Project Name` });
  }
  res.status(500).json({ error: true, message: "Cannot Create Project" });
 }
};

//   Getting User Projects
exports.getProjects = async (req, res) => {
 try {
  const userProjects = await Project.find(
   { userId: req.userId },
   { __v: 0, _id: 0, userId: 0 }
  ).sort({ date: -1 });
  if (userProjects) {
   return res.status(200).json(userProjects);
  }
 } catch (e) {
  console.log(e);
  res.status(500).json({ error: true, message: "Cannot Find Projects" });
 }
};

// Deleting Projects
exports.deleteProject = async (req, res) => {
 const { projectId } = req.body;

 try {
  // Getting Product Images
  const imagesToDelete = await MongoImage.find({ projectId: projectId }, { url: 1, _id: 0 });
  const urlsOfImgs = imagesToDelete?.map((e) => e.url);
  console.log(urlsOfImgs);
  // Deleting Images From FireBase and MongoDB
  for (const imageUrl of urlsOfImgs) {
   // Create a reference to the file
   const imageRef = ref(firebaseStorage, imageUrl);

   // Delete Image From FireBase
   await deleteObject(imageRef);

   // Delete Image From MongoDB
   await MongoImage.findOneAndDelete({ url: imageUrl });
  }
  // Deleting Project From MongoDB
  const deleted = await Project.findOneAndDelete({ projectId: projectId });

  if (!deleted) {
   return res.status(401).json({ message: "Unable to delete Project" });
  }
  console.log("delete");
  res.status(200).json({ message: "Project Deleted Successfully" });
 } catch (e) {
  console.log(e);
  res.status(500).json({ error: true, message: "Unable to delete Project" });
 }
};
