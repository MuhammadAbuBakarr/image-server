const express = require("express");
const router = express.Router();
// Register Functions

const {
 registerUser,
 loginUser,
 getAllUser,
 deleteAllUsers,
 getUserById,
} = require("../controllers/UserControllers");

// Register MiddleWare Function
const { registerMiddleWare } = require("../middleware/userMiddlewares/registerMiddleware");

// Login MiddleWare Functions
const { loginMiddleWare } = require("../middleware/userMiddlewares/loginMiddleware");
const { verifyToken } = require("../middleware/verifyToken");

// User Routes

router.post("/register", registerMiddleWare, registerUser);

router.post("/login", loginMiddleWare, loginUser);

// Get All Users
router.get("/user", getAllUser);

// Delete All Users
router.delete("/user", deleteAllUsers);

// Get User From Token
router.get("/verify", verifyToken, getUserById);

module.exports = router;
