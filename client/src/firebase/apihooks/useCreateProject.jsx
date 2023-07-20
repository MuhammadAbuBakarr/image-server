import React from "react";
import axios from "axios";
import { message } from "antd";
import { useLoaderContext } from "../../contexts/LoaderContext";
import useGetProjects from "./useGetProjects";
import { useImageContext } from "../../contexts/ImagesContext";
import api from "../../axiosConfig/axiosInstance";
import useAxios from "../../axiosConfig/axiosInstance";
const useCreateProject = () => {
 const api = useAxios();
 const { setprojects } = useImageContext();
 const getProjects = useGetProjects(setprojects);

 const { setprojectModal } = useLoaderContext();

 const uploadProject = async (projectName, setInput) => {
  try {
   const { data, status } = await api.post("/project", { projectName });
   if (status === 200) {
    console.log(data);
    message.success(data?.message);
    getProjects();
    setprojectModal(false);
    setInput("");
   }
  } catch (e) {
   console.log(e);
   message.error(e?.response?.data?.message);
  }
 };
 return uploadProject;
};

export default useCreateProject;
