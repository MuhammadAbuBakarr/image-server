import { Modal } from "antd";
import React, { useEffect } from "react";
import { useLoaderContext } from "../../../contexts/LoaderContext";
import useDeleteProject from "../../apihooks/useDeleteProject";
import { useImageContext } from "../../../contexts/ImagesContext";
// Importing Test Spinner
import Spinner from "../loaders/css-loader/CssLoader";

const DeleteProjectModal = ({ api }) => {
 const { projectID } = useImageContext();
 const deleteProject = useDeleteProject();
 const { deleteProjectModal, setdeleteProjectModal, deleteModalLoading } = useLoaderContext();
 return (
  <>
   <Modal
    open={deleteProjectModal}
    footer={[
     <button
      key={1}
      className=" border-2 border-gray-800 text-gray-800  mx-4 px-5 py-2 rounded-lg text-xl"
      onClick={() => setdeleteProjectModal(false)}
     >
      Cancel
     </button>,
     <button
      key={2}
      className="border-2 bg-red-400 border-red-400 text-white px-3 py-2 rounded-lg text-xl"
      onClick={() => deleteProject(projectID)}
     >
      <div className="flex gap-x-2">
       <span>{deleteModalLoading ? "Deleting" : "Delete"}</span> {deleteModalLoading && <Spinner />}
      </div>
     </button>,
    ]}
   >
    <>
     <div className="flex justify-center items-center pb-9 gap-x-2">
      <img src="https://img.icons8.com/?size=512&id=109460&format=png" className="w-14" alt="" />
      <h1 className="text-xl  text-red-500 text-center">
       Deleting Project will also Delete Images in it !!
      </h1>
     </div>
    </>
   </Modal>
  </>
 );
};

export default DeleteProjectModal;
