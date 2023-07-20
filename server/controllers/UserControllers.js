const User = require("../models/user");

//  Register User
exports.registerUser = async (req, res) => {
 const { name, email } = req.body;

 try {
  // Create a new user
  const newUser = await User.create({
   name,
   email,
   password: req.password,
  });

  res.status(201).json({
   message: "User registered successfully",
   user: { ...newUser?._doc, password: undefined },
  });
 } catch (error) {
  console.error("Registration error:", error);
  res.status(500).json({ message: "Server error" });
 }
};

//  Login User
exports.loginUser = async (req, res) => {
 try {
  res.status(200).json({ message: "Login successful", user: req.user, token: req.token });
 } catch (error) {
  console.error("User Error:", error);
  res.status(500).json({ message: "Server error" });
 }
};

exports.getUserById = async (req, res) => {
 try {
  const user = await User.findById(req.user, { password: 0 });
  if (user) {
   res.status(200).json(user);
  }
 } catch (e) {
  console.log(e);
  res.status(500).json({ message: "Server Error" });
 }
};

exports.getAllUser = async (req, res) => {
 try {
  const Users = await User.find({}, { password: 0, __v: 0 });
  res.status(200).json(Users);
 } catch (e) {
  console.log(e);
  res.status(500).json({ message: "Server error" });
 }
};

exports.deleteAllUsers = async (req, res) => {
 try {
  await User.deleteMany();
  res.status(200).send("All Users Deleted");
 } catch (e) {
  console.log(e);
  res.status(500).json({ message: "Server error" });
 }
};
