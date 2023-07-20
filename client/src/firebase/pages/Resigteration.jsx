import { message } from "antd";
import React, { useState } from "react";
import useRegister from "../apihooks/userHooks/useRegister";
import Spinner from "../components/loaders/css-loader/CssLoader";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
 const [email, setEmail] = useState("");
 const [name, setName] = useState("");
 const [password, setPassword] = useState("");
 const [confirmPassword, setConfirmPassword] = useState("");
 const [passwordError, setPasswordError] = useState("");
 const passwordRegex = /^(?=.*[A-Z])/;
 const { registerUser, loading: spin } = useRegister(setConfirmPassword, setPassword);
 const nav = useNavigate();

 const handlePasswordChange = (e) => {
  const newPassword = e.target.value;
  setPassword(newPassword);

  // Password validation rules

  if (!passwordRegex.test(newPassword)) {
   setPasswordError("Password must include one uppercase letter");
  } else {
   setPasswordError("");
  }
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  if (!passwordRegex.test(password)) {
   return setPasswordError("Please Add A Valid Password");
  }

  // Password validation
  if (password !== confirmPassword) {
   setPasswordError("Passwords do not match");
   return;
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
   setPasswordError("Invalid email");
   return;
  }

  // Password confirmation and other registration logic
  setPasswordError("");
  const data = { email, name, password, confirmPassword };
  console.log(data);
  // Calling Function
  registerUser(data);
 };

 return (
  <>
   <div className="w-screen h-screen flex justify-center items-center">
    <form
     onSubmit={handleSubmit}
     className="w-[30vw] bg-gray-100 space-y-4 p-6 rounded-xl border-2 border-gray-200 -mt-28"
    >
     <div className="">
      <label htmlFor="name" className="block mb-2 text-gray-700">
       Name:
      </label>
      <input
       placeholder="Enter Name"
       type="text"
       id="name"
       value={name}
       onChange={(e) => setName(e.target.value)}
       required
       className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
     </div>
     <div className="">
      <label htmlFor="email" className="block mb-2 text-gray-700">
       Email:
      </label>
      <input
       placeholder="Enter Email"
       type="email"
       id="email"
       value={email}
       onChange={(e) => setEmail(e.target.value)}
       required
       className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
     </div>
     <div className="">
      <label htmlFor="password" className="block mb-2 text-gray-700">
       Password:
      </label>
      <input
       placeholder="Enter Password"
       type="password"
       id="password"
       value={password}
       onChange={handlePasswordChange}
       required
       className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
     </div>
     <div className="">
      <label htmlFor="confirmPassword" className="block mb-2 text-gray-700">
       Confirm Password:
      </label>
      <input
       placeholder="Enter Confirm Password"
       type="password"
       id="confirmPassword"
       value={confirmPassword}
       onChange={(e) => setConfirmPassword(e.target.value)}
       required
       className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
      />
     </div>
     {passwordError && <div className="text-red-500 text-sm">{passwordError}</div>}
     <button
      type="submit"
      className="bg-blue-500 hover:bg-blue-600 flex justify-center items-center gap-x-2 text-white font-semibold w-full py-3  rounded"
     >
      {spin ? "Registering" : "Register"} {spin && <Spinner />}
     </button>
     <h2 className="text-lg font-medium text-center mt-2">
      Already a User ?{" "}
      <a onClick={() => nav("/login")} className="text-blue-500 underline cursor-pointer">
       Login here
      </a>
     </h2>
    </form>
   </div>
  </>
 );
};

export default RegistrationForm;
