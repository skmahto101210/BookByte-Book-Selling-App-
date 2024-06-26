import React, { useContext, useReducer, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider.store";
import TypeWriter from "./TypeWriter.component";

export default function ForgotPassword() {
  const { passwordReset } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/login";

  const handelForgotPassword = (event) => {
    setError(true);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;

    passwordReset(email)
      .then((result) => {
        // Signed up
        const user = result.user;
        alert(
          "password reset link have been send to your emailId!!!\nplease check your email account"
        );
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // console.log(errorMessage);
        // ..
      });
  };
  return (
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form onSubmit={handelForgotPassword} className="bg-white">
        <h1 className="text-gray-800 font-bold text-2xl mb-4">
          Reset{" "}
          <span className=" text-pink-500">
            <TypeWriter text={"Password!"} delay={50} />
          </span>
        </h1>

        <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
            />
          </svg>
          <input
            className="pl-2 outline-none border-none"
            type="text"
            name="email"
            id="email"
            placeholder="Email Address"
            autoComplete="email"
          />
        </div>

        <p className="mt-3">
          If you haven't account. Please{" "}
          <Link
            to="/sign-up"
            className="text-blue-600 hover:text-sky-500 underline">
            Sign Up
          </Link>{" "}
          Here
        </p>
        <button
          type="submit"
          className="block w-full bg-pink-600 hover:bg-pink-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
          Reset
        </button>
      </form>
    </div>
  );
}
