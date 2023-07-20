import React, { useState } from "react";
import axios from "axios";
import { useImageContext } from "../../contexts/ImagesContext";
import { useLoaderContext } from "../../contexts/LoaderContext";
import api from "../../axiosConfig/axiosInstance";
import useAxios from "../../axiosConfig/axiosInstance";
const useUploadImage = () => {
 const api = useAxios();

 const { getImages, getStorage, projectID } = useImageContext();
 const { setuploadLoader } = useLoaderContext();

 //  test code
 const uploadImage = async (image) => {
  // Error Handling
  if (!image) {
   alert("Please Select Image");
   return;
  }
  if (image?.type.substring(0, 5) !== "image") {
   alert("File is not Image");
   return;
  }
  /////////////////////
  try {
   const formData = new FormData();
   formData.append("image", image);
   formData.append("userId", "Random Id");
   setuploadLoader(true);
   const { data, status } = await api.post(`/image/${projectID}`, formData);
   if (status === 200) {
    setuploadLoader(false);
    console.log(data);
    getImages(projectID);
    getStorage();
   }
  } catch (e) {
   console.log(e);
   if (e) {
    setuploadLoader(false);
    console.log(e?.response?.data);
    return alert(e?.response?.data?.message);
   }
  }
 };
 return uploadImage;
};

export default useUploadImage;
