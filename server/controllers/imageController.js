// Imports of Firebase
const {
 getStorage,
 ref,
 uploadBytes,
 getDownloadURL,
 listAll,
 getMetadata,
 deleteObject,
} = require("firebase/storage");
const { firebase } = require("../firebase/firebase");
const firebaseStorage = getStorage(firebase);
// Importing Image Model
const MongoImage = require("../models/image");

//  Posting Image to firebase

exports.postImage = async (req, res) => {
 // Destructuring Request
 const { file, size } = req;

 const { userId } = req.body;
 const userFolder = req.projectId;
 console.log(userFolder);

 try {
  const imageRef = ref(
   firebaseStorage,
   `${userFolder}/${file?.originalname + "sort=" + Date.now()}`
  );
  await uploadBytes(imageRef, file.buffer, {
   contentType: file.mimetype,
  });

  const url = await getDownloadURL(imageRef);

  if (url) {
   const posted = await MongoImage.create({ url, size, projectId: req.projectId });

   if (posted) {
    return res.status(200).json({ url, message: "Image Uploaded Successfully" });
   }
  }
 } catch (e) {
  console.log(e.message);
  return res.status(500).json({ error: true, message: "Image Cannot Posted" });
 }
};

// Getting Imagess by Projects
exports.getImages = async (req, res) => {
 try {
  const images = await MongoImage.find({ projectId: req.projectId }, { __v: 0, userId: 0 }).sort({
   date: -1,
  });
  if (images) {
   res.status(200).json(images);
  }
 } catch (e) {
  console.log(e);
 }
};

// Delete Image
exports.deleteImage = async (req, res) => {
 try {
  const imageUrl = req?.body?.url;
  const imgToDelete = ref(firebaseStorage, imageUrl);
  await deleteObject(imgToDelete);
  await MongoImage.findOneAndDelete({ url: imageUrl });
  res.status(200).json({ message: "Image Deleted Successfully" });
 } catch (e) {
  console.error(e);
  res.status(500).json({ error: true, message: "Error Deleteing Images" });
 }
};
