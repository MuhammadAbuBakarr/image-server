const User = require("../../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginMiddleWare = async (req, res, next) => {
 const { email, password } = req.body;

 try {
  if (!email || !password) {
   return res.status(400).json({ message: "Please Send Complete Data" });
  }
  // Find the user by email
  const user = await User.findOne({ email }, { __v: 0 });
  if (!user) {
   return res.status(404).json({ message: "Invalid Credentials Please Re-Enter" });
  }

  // Compare Password
  const passwordMatch = await bcrypt.compare(password, user?.password);
  if (!passwordMatch) {
   return res.status(401).json({ message: "Invalid Credentials Please Re-Enter" });
  }

  // Generating token
  const token = jwt.sign({ userId: user?._id }, "secret_key");
  req.token = token;
  req.user = { ...user?._doc, password: undefined };

  next();
 } catch (e) {
  console.log(e);
  res.status(500).json({ message: "Server error" });
 }
};
