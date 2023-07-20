import { message } from "antd";
import axios from "axios";
import React, { useState } from "react";
import useLogin from "./useLogin";
import api from "../../../axiosConfig/axiosInstance";
import useAxios from "../../../axiosConfig/axiosInstance";

const useRegister = (setpass, setCPass) => {
 const { loginUser } = useLogin();
 const [loading, setloading] = useState(false);
 const api = useAxios();

 const registerUser = async (user) => {
  setloading(true);
  try {
   const { data, status } = await api.post("/register", user);
   if (status == 201) {
    loginUser({ email: user?.email, password: user?.password });
    setloading(false);
   }
  } catch (e) {
   console.log(e);
   message.error(e?.response?.data?.message);
   setpass("");
   setCPass("");
   setloading(false);
  }
 };
 return { registerUser, loading };
};

export default useRegister;
