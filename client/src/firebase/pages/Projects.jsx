import React, { useEffect } from "react";
import AddProjectCard from "../components/AddProjectCard";
import GetProjects from "../components/GetProjects";
import UserStorage from "../components/UserStorage";
import { useImageContext } from "../../contexts/ImagesContext";
import LogoutButton from "../components/htmlComponents/LogoutButton";

const Projects = () => {
 const { setImages } = useImageContext();
 // Test Code for Emptying Images Array
 useEffect(() => {
  setImages([]);
 }, []);

 return (
  <>
   <div className="flex items-center justify-between px-16">
    <div className=""></div>
    <div className="text-center p-6 text-5xl">Projects</div>
    <LogoutButton />
   </div>
   <div className="px-32 mt-10">
    <h1 className="text-2xl px-2 pb-7  font-medium">Create Projects</h1>
    <AddProjectCard />
   </div>
   {/* User Storage */}
   <div className="mt-10">
    <div className="px-32">
     <UserStorage display />
    </div>
    {/* View PRoject */}
    <h1 className="text-2xl font-medium text-center ">Your Projects</h1>
    <div className="flex gap-14  flex-wrap p-10 justify-center">
     <GetProjects />
    </div>
    <div className="mt-52" />
   </div>
  </>
 );
};

export default Projects;
