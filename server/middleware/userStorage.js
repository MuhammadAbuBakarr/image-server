// Importing Image Model
const MongoImage = require("../models/image");

exports.getUserStorage = async (req, res) => {
 const userTotalStorage = 10;
 try {
  // Storage on Empty Images
  const images = await MongoImage.find({}, { size: 1, _id: 0 });
  if (images.length === 0) {
   return res.status(200).json({ occupied: 0, userStorage: userTotalStorage });
  }
  //   Calculating Total Image Size
  const totalSize = images
   ?.map((e) => e.size)
   .reduce((a, b) => a + b)
   .toFixed(2);
  if (totalSize > 0) {
   res.status(200).json({ occupied: totalSize, userStorage: userTotalStorage });
  }
 } catch (e) {
  console.log(e);
  res.status(500).json({ error: true, message: "Internal Server Error" });
 }
};
