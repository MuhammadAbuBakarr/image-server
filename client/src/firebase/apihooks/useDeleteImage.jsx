import axios from "axios";
import { useImageContext } from "../../contexts/ImagesContext";
import { useLoaderContext } from "../../contexts/LoaderContext";
import api from "../../axiosConfig/axiosInstance";
import useAxios from "../../axiosConfig/axiosInstance";
const useDeleteImage = () => {
 const api = useAxios();

 const { setdeleteLoading } = useLoaderContext();
 const { getImages, getStorage, projectID } = useImageContext();
 const deleteImage = async (url) => {
  setdeleteLoading((prev) => ({ ...prev, loading: true, url }));
  try {
   const { data, status } = await api.delete("/image", { data: { url } });
   if (status === 200) {
    getImages(projectID);
    getStorage();
    setdeleteLoading({ loading: false, url: "" });
   }
  } catch (e) {
   setdeleteLoading({ loading: false, url: "" });
   console.log(e);
  }
 };
 return deleteImage;
};

export default useDeleteImage;
