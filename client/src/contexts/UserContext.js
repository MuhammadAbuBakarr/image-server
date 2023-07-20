import { createContext, useContext, useState } from "react";
import useVerifyUser from "../firebase/apihooks/userHooks/useVerifyUser";
const UserContext = createContext();

const UserContextProvider = ({ children }) => {
 // User State
 const [user, setuser] = useState();
 const [updater, setupdater] = useState(false);

 // Fetch User on every Refresh
 useVerifyUser(setuser);

 return (
  <UserContext.Provider value={{ setuser, user, setupdater }}>{children}</UserContext.Provider>
 );
};

const useUserContext = () => useContext(UserContext);
export { UserContextProvider, useUserContext };
