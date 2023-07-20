import { Route, Navigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

const PrivateRoute = ({ element: Element, isAuthenticated }) => {
 const user = JSON.parse(localStorage.getItem("user"));
 const token = localStorage.getItem("token");
 console.log(user, "FRom Private Route");
 console.log(token, "Token From Private Route");
 //  console.log(user, "User From Private Route Component");
 return (
  <>
   {user?._id && <Element />}
   {!user?._id && <Navigate to="/login" replace />}
   {/* {token && <Element />}
   {!token && <Navigate to="/login" replace />} */}
  </>
 );
};
export default PrivateRoute;
