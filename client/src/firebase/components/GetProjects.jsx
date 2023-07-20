import React, { useEffect, useState } from "react";
import useGetProjects from "../apihooks/useGetProjects";
import ProjectCard from "./ProjectCard";
import { useImageContext } from "../../contexts/ImagesContext";
const GetProjects = () => {
 const { projects, setprojects } = useImageContext();
 const getProjects = useGetProjects(setprojects);
 useEffect(() => {
  getProjects();
 }, []);

 return (
  <>
   {projects?.map((e, i) => (
    <ProjectCard key={i} name={e.projectName} api={e.projectId} />
   ))}
  </>
 );
};

export default GetProjects;
