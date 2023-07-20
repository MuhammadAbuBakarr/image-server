import { message } from "antd";
import React from "react";
import useGetProjects from "./useGetProjects";
import { useLoaderContext } from "../../contexts/LoaderContext";
import { useImageContext } from "../../contexts/ImagesContext";
import api from "../../axiosConfig/axiosInstance";
import useAxios from "../../axiosConfig/axiosInstance";

const useDeleteProject = () => {
 const api = useAxios();

 const { getStorage } = useImageContext();
 const { setdeleteProjectModal, setdeleteModalLoading } = useLoaderContext();
 const getProjects = useGetProjects();
 const deleteProject = async (projectId) => {
  try {
   setdeleteModalLoading(true);
   const { data, status } = await api.delete("/project", { data: { projectId } });
   if (status === 200) {
    console.log(data);
    getProjects();
    getStorage();
    setdeleteModalLoading(false);
    message.success(data?.message);
    setdeleteProjectModal(false);
   }
  } catch (e) {
   message.success(e?.response?.data?.message);
  }
 };
 return deleteProject;
};

export default useDeleteProject;
