import { message } from "antd";
import React, { useEffect, useState } from "react";
import useLogin from "../apihooks/userHooks/useLogin";
import Spinner from "../components/loaders/css-loader/CssLoader";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const { loginUser, loading: spin, error } = useLogin(setPassword);
 const nav = useNavigate();
 const handleSubmit = (e) => {
  e.preventDefault();
  loginUser({ email, password });
 };

 return (
  <div className="w-screen h-screen flex justify-center items-center">
   <form onSubmit={handleSubmit} className="w-[25vw] border-2 bg-gray-100 rounded-2xl p-10">
    <div className="mb-4">
     <label htmlFor="email" className="block mb-2 text-gray-700">
      Email:
     </label>
     <input
      type="email"
      id="email"
      placeholder="Enter Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
     />
    </div>
    <div className="mb-4">
     <label htmlFor="password" className="block mb-2 text-gray-700">
      Password:
     </label>
     <input
      type="password"
      id="password"
      placeholder="Enter Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      required
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
     />
    </div>
    <button
     type="submit"
     className="bg-blue-500 hover:bg-blue-600 flex justify-center items-center gap-x-2 text-white font-semibold py-2 px-4 rounded w-full"
    >
     {spin ? "Signing In" : "Sign In"} {spin && <Spinner />}
    </button>
    <h2 className="text-lg font-medium text-center mt-2">
     Not a User ?{" "}
     <a onClick={() => nav("/register")} className="text-blue-500 underline cursor-pointer">
      Register here
     </a>
    </h2>
   </form>
  </div>
 );
};

export default LoginForm;
