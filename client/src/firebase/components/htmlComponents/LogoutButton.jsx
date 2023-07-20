import React, { useState } from "react";
import useLogout from "../../apihooks/userHooks/useLogout";
import { Button } from "antd";
import Spinner from "../loaders/css-loader/CssLoader";
import { useUserContext } from "../../../contexts/UserContext";

const LogoutButton = () => {
 const { user } = useUserContext();
 const [spin, setspin] = useState(false);

 const logout = useLogout();

 const handleLogOut = () => {
  setspin(true);
  setTimeout(() => {
   setspin(false);
   logout();
  }, 1500);
 };
 return (
  <>
   <div>
    <div>{user?.name}</div>
    <Button className="flex gap-3" size="large" onClick={handleLogOut} danger type="primary">
     Logout {spin && <Spinner />}
    </Button>
   </div>
  </>
 );
};

export default LogoutButton;
