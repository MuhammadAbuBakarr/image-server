import { CloseCircleOutlined } from "@ant-design/icons";
import { Modal } from "antd";
import React, { useState } from "react";
import { useLoaderContext } from "../../contexts/LoaderContext";
import CreateProjectModal from "./modals/CreateProjectModal";

const AddProjectCard = () => {
 const { projectModal, setprojectModal } = useLoaderContext();
 return (
  <>
   <div
    onClick={() => {
     setprojectModal(true);
    }}
    className="border gap-11 w-72 h-48 border-gray-400 p-6 rounded-lg cursor-pointer bg-slate-50 grid place-items-center"
   >
    <div className="flex justify-center items-center flex-col">
     <img src="/plus-icon.png" className="w-14" alt="" />
     <span className="text-lg text-[#1F2937] font-medium tracking-wide mt-3">Create New</span>
    </div>
   </div>
   <CreateProjectModal />
  </>
 );
};

export default AddProjectCard;
