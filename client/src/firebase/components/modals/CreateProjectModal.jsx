import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useLoaderContext } from "../../../contexts/LoaderContext";
import useCreateProject from "../../apihooks/useCreateProject";
const CreateProjectModal = () => {
 const { projectModal, setprojectModal } = useLoaderContext();
 const uploadProject = useCreateProject();
 const [input, setinput] = useState("");

 const handleProjectUpload = () => {
  uploadProject(input, setinput);
 };

 return (
  <>
   <Modal
    open={projectModal}
    footer={[
     <button
      key={1}
      className=" border-2 border-[#1F2937] mx-4 text-[#1F2937] px-5 py-2 rounded-lg text-xl"
      onClick={() => setprojectModal(false)}
     >
      Close
     </button>,
     <button
      key={2}
      className="bg-[#1F2937] border-2 border-[#1F2937] text-white px-5 py-2 rounded-lg text-xl"
      onClick={handleProjectUpload}
     >
      Create +
     </button>,
    ]}
   >
    <>
     <div>
      <h1 className="text-2xl text-center">Enter Your Project Name</h1>
      <input
       value={input}
       onChange={(e) => setinput(e.target.value)}
       type="text"
       placeholder="Project Name"
       className="px-4 py-2 w-full my-5 border-2 placeholder:font-medium placeholder:text-lg placeholder:text-[#8f9ba8] border-[#1F2937] text-lg text-[#1F2937] font-medium rounded-lg mt-8"
      />
     </div>
    </>
   </Modal>
  </>
 );
};

export default CreateProjectModal;
