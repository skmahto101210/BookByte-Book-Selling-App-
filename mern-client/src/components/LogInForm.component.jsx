import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider.store";
import googleLogo from "../assets/googleLogo.png";
import TypeWriter from "./TypeWriter.component";

export default function LogInForm() {
  const { login, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handelLogin = (event) => {
    setError(null);
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password)
      .then((result) => {
        // Signed up
        const user = result.user;
        alert("Login successfully");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };
  const handleRegisterWithGoogle = () => {
    setError(null);
    loginWithGoogle()
      .then((result) => {
        // Signed up
        const user = result.user;
        alert("Sign Up successfully");
        navigate(from, { replace: true });
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage);
        // ..
      });
  };
  return (
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form onSubmit={handelLogin} className="bg-white">
        <h1 className="text-gray-800 font-bold text-2xl mb-1">
          Hello{" "}
          <span className=" text-pink-500">
            <TypeWriter text={"Again!"} delay={50} />
          </span>
        </h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

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
        <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path
              fillRule="evenodd"
              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
              clipRule="evenodd"
            />
          </svg>
          <input
            className="pl-2 outline-none border-none"
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="current-password"
          />
        </div>
        {error && (
          <p className="mt-3 mx-3 text-red-600">
            {"email or password is invalid ):"}
          </p>
        )}
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
          Log In
        </button>
        <div className="w-full flex justify-center items-center px-4 py-2">
          <p className="mx-4">Login with: </p>
          <button onClick={handleRegisterWithGoogle}>
            <img
              src={googleLogo}
              alt="googleLogo"
              className="w-8 h-8 inline-block"
            />
          </button>
        </div>
        <Link
          to="/login/forgot-password"
          className="text-sm ml-2 hover:text-blue-500 cursor-pointer">
          Forgot Password ?
        </Link>
      </form>
    </div>
  );
}
