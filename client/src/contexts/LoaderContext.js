import React, { createContext, useState, useContext } from "react";
// Create the context
const LoaderContext = createContext();

// Create a provider component for the context
const LoaderContextProvider = ({ children }) => {
 // ==================== Loading State =======================

 //   Upload Loader Code
 const [uploadLoader, setuploadLoader] = useState(false);

 //  Delete Loading of Image
 const [deleteLoading, setdeleteLoading] = useState({ loading: false, url: "" });
 //  Delete Loading of Image

 // ============================== View State Toggle ===============================
 //  Toggle View State
 const [view, setview] = useState(false);

 // ====================== Modals States ==================================
 //  Create  Project Modal State
 const [projectModal, setprojectModal] = useState(false);

 //  Delete Project Modal State
 const [deleteProjectModal, setdeleteProjectModal] = useState(false);

 //  Delete Modal Loading State
 const [deleteModalLoading, setdeleteModalLoading] = useState(false);

 return (
  <LoaderContext.Provider
   value={{
    uploadLoader,
    setuploadLoader,
    view,
    setview,
    deleteLoading,
    setdeleteLoading,
    projectModal,
    setprojectModal,
    deleteProjectModal,
    setdeleteProjectModal,
    deleteModalLoading,
    setdeleteModalLoading,
   }}
  >
   {children}
  </LoaderContext.Provider>
 );
};
// Custom hook to access the context
const useLoaderContext = () => useContext(LoaderContext);

export { LoaderContextProvider, useLoaderContext };
