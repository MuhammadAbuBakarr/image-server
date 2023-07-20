import { message } from "antd";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxios from "../../../axiosConfig/axiosInstance";
import { useUserContext } from "../../../contexts/UserContext";
import api from "../../../axiosConfig/axiosInstance";
const useLogin = (setPassword) => {
 const api = useAxios();
 const { setuser, setupdater } = useUserContext();
 const [loading, setloading] = useState(false);
 const [error, seterror] = useState(false);
 const nav = useNavigate();
 const loginUser = async (user) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  setloading(true);
  try {
   const { data, status } = await api.post("/login", user);

   if (status === 200) {
    console.log(data);
    localStorage.setItem("token", data?.token);
    console.log(
     localStorage.setItem("user", JSON.stringify(data?.user)),
     "user From uselogin func"
    );

    setuser(data?.user);

    setTimeout(() => {
     message.success(`Welcome ${data?.user?.name}`);
     setloading(false);
     nav("/");
    }, 1000);
   }
  } catch (e) {
   message.error(e?.response?.data?.message);
   setloading(false);
   seterror(true);
   setPassword("");
  }
 };
 return { loginUser, loading, error };
};

export default useLogin;
