import axios from "axios";
import api from "../../axiosConfig/axiosInstance";
import { useEffect } from "react";
import useAxios from "../../axiosConfig/axiosInstance";

const useGetStorage = (setstorage) => {
 const api = useAxios();

 const getStorage = async () => {
  try {
   const { status, data } = await api.get("/storage");
   if (status === 200) {
    setstorage(data);
   }
  } catch (e) {
   console.log(e);
  }
 };
 useEffect(() => {
  getStorage();
 }, []);

 return getStorage;
};

export default useGetStorage;
