const express = require("express");
const router = express.Router();
const multer = require("multer");
const { getUserStorage } = require("../middleware/userStorage");

// Import Image Controllers
const { postImage, getImages, deleteImage } = require("../controllers/imageController");
const { createProject, getProjects, deleteProject } = require("../controllers/ProjectControllers");

// Importing MiddleWares
const { storageLimit } = require("../middleware/storageLimit");
const { generateProjectAPI } = require("../middleware/generateProjectAPI");
const { verifyUserId } = require("../middleware/userMiddlewares/verifyUserId");

// Test MiddleWare
const { checkProjectId } = require("../middleware/projectIDVerify");
const { authHeader } = require("../middleware/checkHeader");
// Token MiddleWare
const { verifyToken } = require("../middleware/verifyToken");
const upload = multer({
 storage: multer.memoryStorage(),
});

//================================ Image Routes ==================================

// Upload Single Image
router.post("/image/:projectId", checkProjectId, upload.single("image"), storageLimit, postImage);
// Test code for project id auth
router.post("/test-id/:projectId", checkProjectId, upload.single("image"), storageLimit, postImage);
// Get User Images
router.get("/image/:projectId", checkProjectId, getImages);

// Delete Images
router.delete("/image", deleteImage);

//  ============================= Storage Routes ======================================
// Get User Storage
router.get("/storage", getUserStorage);

//==========================================================================================
//================================== Project Routes ========================================

// Creating Project
router.post("/project", verifyToken, verifyUserId, generateProjectAPI, createProject);

// Getting User Projects
router.get("/project", verifyToken, verifyUserId, getProjects);

//  Getting User Project
router.delete("/project", deleteProject);

//==========================================================================================
module.exports = router;
