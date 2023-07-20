import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UploadImages from "../components/UploadImages";
import GetImages from "../components/GetImages";
import { useImageContext } from "../../contexts/ImagesContext";
const ProjectPage = () => {
 const { setprojectID, getImages } = useImageContext();
 const { id, name } = useParams();
 const nav = useNavigate();
 useEffect(() => {
  getImages(id);
  setprojectID(id);
 }, []);
 return (
  <>
   <div className="px-32">
    <div className="flex justify-between items-center ">
     <img
      className="w-10 h-10 cursor-pointer"
      onClick={() => nav("/")}
      src="https://cdn-icons-png.flaticon.com/512/93/93634.png"
      alt=""
     />
     <h1 className="text-4xl font-medium text-center p-10">{name}</h1>
     <h1 className=""></h1>
    </div>
    {/* User Storage */}
    <>
     <UploadImages />
     <GetImages />
    </>
   </div>
  </>
 );
};

export default ProjectPage;
