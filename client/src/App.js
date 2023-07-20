import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./firebase/Index";
import ProjectPage from "./firebase/pages/ProjectPage";
import PrivateRoute from "./firebase/helper/PrivateRoute";
import LoginForm from "./firebase/pages/Login";
import RegistrationForm from "./firebase/pages/Resigteration";
function App() {
 return (
  <>
   <BrowserRouter>
    <Routes>
     <Route path="/" element={<PrivateRoute element={Index} />} />
     <Route path="/login" element={<LoginForm />} />
     <Route path="/register" element={<RegistrationForm />} />
     <Route path="/project/:id/:name" element={<ProjectPage />} />
    </Routes>
   </BrowserRouter>
  </>
 );
}

export default App;
