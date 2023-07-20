//  Importing Firebase functions
const {
 getStorage,
 ref,
 uploadBytes,
 getDownloadURL,
 listAll,
 getMetadata,
} = require("firebase/storage");
const { firebase } = require("../firebase/firebase");
const storage = getStorage(firebase);

//  Importing helper functions

const { bytesToMB } = require("../helper/bytesToMbs");

exports.storageLimit = async (req, res, next) => {
 //  Making Dynamic Folders with Project ID
 console.log(req.projectId);
 const userFolder = req.projectId;
 // User Storage Limit
 let limit = 10;
 const file = req.file;

 const fileSize = bytesToMB(file.size);

 //  Error Handling on Large Image

 const fileSizeLmit = 5;
 if (fileSize > fileSizeLmit) {
  return res.status(400).json({ error: true, message: "Image Should be less then 5 MBs" });
 }

 //  Error Handling on Empty Image

 if (!file) {
  return res.status(400).json({ error: true, message: "Please Upload Image" });
 }

 //  Error Handling only Image File Accepted

 if (file?.mimetype?.substring(0, 5) !== "image") {
  return res.status(400).json({ error: true, message: "Only Image file is accepted" });
 }

 //  Error Handling Storage Full

 let totalSize = 0;
 const imagesListRef = ref(storage, userFolder);
 try {
  const response = await listAll(imagesListRef);
  for (const item of response?.items) {
   const { size } = await getMetadata(item);
   totalSize += bytesToMB(size);
  }

  //  Error Sending Storage Full

  const storage = `${totalSize.toFixed(2)} / ${limit}`;
  if (limit <= totalSize + fileSize) {
   return res
    .status(400)
    .json({ error: true, limit, message: "Your Storage Limit Exceeds", storage });
  }

  //   On Success Moving to Posting Image
  req.storage = storage;
  req.size = fileSize;
  next();
 } catch (error) {
  console.error(error);
  res.status(500).send("Error retrieving images");
 }
};
