const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
 // Get the token from the request headers, query parameters, or cookies

 const token = req.headers.authorization?.split(" ")[1];
 if (!token) {
  return res
   .status(401)
   .json({ errorType: "no-token", message: "No token found, authorization denied" });
 }

 try {
  // Verifying token
  const decoded = jwt.verify(token, "secret_key");
  // Sending User ID
  req.user = decoded.userId;
  // test Code
  next();
 } catch (error) {
  return res
   .status(401)
   .json({ errorType: "invalid-token", message: "Invalid token, authorization denied" });
 }
};
