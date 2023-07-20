import { message } from "antd";
import api from "../../axiosConfig/axiosInstance";
import useAxios from "../../axiosConfig/axiosInstance";

const useGetImages = (setImages) => {
 const api = useAxios();
 const getImages = async (id) => {
  setImages([]);
  try {
   const { data, status } = await api.get(`/image/${id}`);
   if (status === 200) {
    setImages(data);
   }
  } catch (e) {
   console.log(e);
   message.error("Cannot get Images");
  }
 };

 return getImages;
};

export default useGetImages;
