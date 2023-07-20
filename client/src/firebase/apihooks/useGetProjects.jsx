import { message } from "antd";
import api from "../../axiosConfig/axiosInstance";
import useAxios from "../../axiosConfig/axiosInstance";
const useGetProjects = (setprojects) => {
 const api = useAxios();
 const getProjects = async () => {
  console.log("Get Project Call Running");
  setprojects([]);
  try {
   const { data, status } = await api.get("/project");
   if (status === 200) {
    setprojects(data);
   }
  } catch (e) {
   console.log(e);
   console.log("From Get Projects Api");
   message.error(e?.response?.data?.message);
  }
 };
 return getProjects;
};

export default useGetProjects;
