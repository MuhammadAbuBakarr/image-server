const { v4: uuid } = require("uuid");

// Generating PRoject Id with Project Name
exports.generateProjectAPI = async (req, res, next) => {
 const { projectName } = req.body;

 if (!projectName) {
  return res.status(404).json({ error: true, message: "Enter Project Name" });
 }
 try {
  const convertedName = projectName?.trim().toLowerCase().replaceAll(" ", "");
  const randomString = uuid().split("-");
  const projectApiKey = `${randomString[1]}_${convertedName}_${randomString[0]}`;

  req.projectAPI = projectApiKey;
  req.name = projectName.trim();

  next();
 } catch (e) {
  console.log(e);
 }
};
