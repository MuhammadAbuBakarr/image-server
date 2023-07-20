const User = require("../../models/user");
exports.verifyUserId = async (req, res, next) => {
 try {
  const user = await User.findById(req.user, { password: 0 });
  if (user) {
   req.userId = user?._id;
   next();
  }
 } catch (e) {
  console.log(e);
  res.status(500).json({ message: "No User Found" });
 }
};
