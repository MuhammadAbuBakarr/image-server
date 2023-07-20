import React, { useState } from "react";
import useUploadImage from "../apihooks/useUploadImage";
import Loader1 from "./loaders/loader1/Loader1";
import { useLoaderContext } from "../../contexts/LoaderContext";
const UploadImages = () => {
 const { uploadLoader } = useLoaderContext();
 const [image, setimage] = useState();
 const uploadImage = useUploadImage();
 const uploadButtonText = uploadLoader ? "Uploading..." : "Upload Image";
 return (
  <>
   <div className="flex items-center">
    <div className="space-y-6">
     <div>Upload Image Here</div>
     <input type="file" accept="image/*" onChange={(e) => setimage(e.target.files[0])} />
    </div>
    <div className="flex gap-x-2 items-center">
     <button
      disabled={uploadLoader}
      //   //////////////////////
      onClick={() => uploadImage(image)}
      //   /////////////////////////
      className="px-3 py-6 bg-red-300 rounded-lg"
     >
      {uploadButtonText}
     </button>
     {uploadLoader && (
      <div className="">
       <Loader1 height={50} width={50} />
      </div>
     )}
    </div>
   </div>
  </>
 );
};

export default UploadImages;
