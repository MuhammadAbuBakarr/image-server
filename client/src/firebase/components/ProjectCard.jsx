import React from "react";
import DeleteProjectModal from "./modals/DeleteProjectModal";
import { useLoaderContext } from "../../contexts/LoaderContext";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { useImageContext } from "../../contexts/ImagesContext";

const ProjectCard = ({ name, api }) => {
 const { setdeleteProjectModal } = useLoaderContext();
 const { setprojectID } = useImageContext();
 const nav = useNavigate();

 //  Copying Text to ClipBoard
 const handleApiUrl = () => {
  navigator.clipboard
   .writeText(`http://localhost:7000/${api}`)
   .then(() => {
    message.success("Copied To Clipboard");
   })
   .catch((error) => {
    console.error("Error copying text to clipboard:", error);
   });
 };

 //  Shortening Project Name
 const makingName = name?.length > 15 ? `${name?.substring(0, 15)}...` : name;

 return (
  <>
   <div className="border gap-11 w-72 h-48 border-gray-400 p-6 rounded-lg cursor-pointer bg-slate-50">
    {/* Project Name */}
    <div className="h-full flex flex-col justify-between">
     <div className="flex justify-between items-center">
      <h1 className="text-[24px] text-slate-700 font-normal">{makingName}</h1>
      {/* Delete Image Icon */}
      <div>
       <img
        src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
        onClick={() => {
         setprojectID(api);
         setdeleteProjectModal(true);
        }}
        className="w-6 hover:w-7"
       />
      </div>
     </div>
     {/* Button and Image Div */}
     <div className="flex justify-between">
      <button
       onClick={handleApiUrl}
       className="px-2 py-2 text-white bg-gray-800 rounded-md w-24 hover:bg-gray-600 "
      >
       Copy Api
      </button>
      <img
       className="w-8 hover:w-9"
       src="icon.svg"
       alt=""
       onClick={() => nav(`/project/${api}/${name}`)}
      />
     </div>
    </div>
   </div>
   <DeleteProjectModal api={api} />
  </>
 );
};

export default ProjectCard;
