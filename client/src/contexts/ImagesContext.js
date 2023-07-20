import React, { createContext, useState, useContext, useEffect } from "react";
import useGetImages from "../firebase/apihooks/useGetImages";
import useGetStorage from "../firebase/apihooks/useGetStorage";
// Create the context
const ImageContext = createContext();

// Create a provider component for the context
const ImageContextProvider = ({ children }) => {
 // Getting User Images
 const [images, setImages] = useState([]);

 //  Getting User Storage
 const [storage, setstorage] = useState();
 const getStorage = useGetStorage(setstorage);
 //   Test Code
 const [loading, setloading] = useState(false);

 //  Projects Context
 const [projects, setprojects] = useState([]);

 //  Project Id
 const [projectID, setprojectID] = useState("");

 //  Test Code
 const getImages = useGetImages(setImages);

 return (
  <ImageContext.Provider
   value={{
    getImages,
    setImages,
    images,
    storage,
    getStorage,
    setloading,
    loading,
    projects,
    setprojects,
    projectID,
    setprojectID,
   }}
  >
   {children}
  </ImageContext.Provider>
 );
};

// Custom hook to access the context
const useImageContext = () => useContext(ImageContext);

export { ImageContextProvider, useImageContext };
