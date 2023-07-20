const User = require("../../models/user");
const bcrypt = require("bcrypt");

exports.registerMiddleWare = async (req, res, next) => {
 const { name, email, password, confirmPassword } = req.body;

 try {
  // Check Empty Values
  if (!name || !email || !password || !confirmPassword) {
   return res.status(400).json({ message: "Please Send Complete Data" });
  }
  // Check if the passwords is Valid
  const passwordRegex = /^(?=.*[A-Z])/;

  if (!passwordRegex.test(password)) {
   return res.status(400).json({ message: "Please Enter Valid Password" });
  }
  // Check if the email is already registered
  const existingUser = await User.findOne({ email });

  if (existingUser) {
   return res.status(400).json({ message: "Email is already registered" });
  }

  // Check if the passwords match
  if (password !== confirmPassword) {
   return res.status(400).json({ message: "Passwords do not match" });
  }

  // Hashing Password
  const hashedPassword = await bcrypt.hash(password, 10);
  req.password = hashedPassword;
  next();
 } catch (e) {
  console.log(e);
  res.status(500).json({ error: true, message: "Cannot Register user Please try Again" });
 }
};
