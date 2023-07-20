import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ImageContextProvider } from "./contexts/ImagesContext";
import { LoaderContextProvider } from "./contexts/LoaderContext";
import { UserContextProvider } from "./contexts/UserContext";
import "./index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 <React.StrictMode>
  <UserContextProvider>
   <ImageContextProvider>
    <LoaderContextProvider>
     <App />
    </LoaderContextProvider>
   </ImageContextProvider>
  </UserContextProvider>
 </React.StrictMode>
);
