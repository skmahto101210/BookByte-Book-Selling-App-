import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate, useOutlet } from "react-router-dom";
import { AuthContext } from "../store/AuthProvider.store";
import googleLogo from "../assets/googleLogo.png";
import TypeWriter from "./TypeWriter.component";

export default function SignUp() {
  const [displayFullName, setDisplayFullName] = useState("");
  const { createUser, loginWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState("error");
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const handelSignUp = (event) => {
    setError(null);
    event.preventDefault();
    const form = event.target;
    const fullName = form.fullName.value;
    const username = form.username.value;
    const email = form.email.value;
    const password = form.password.value;
    const userObj = { fullName, username, email, password };

    createUser(email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
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
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-tr from-pink-600 to-pink-100 i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">
            <Link to="/" className="hover:cursor-pointer">
              BookByte
            </Link>
          </h1>
          <p className="text-white mt-1">
            Dive into a world of literary treasures at your fingertips!
          </p>
          <Link
            to="/about"
            className="block w-28 bg-white text-indigo-800 hover:text-pink-500 mt-4 py-2 rounded-2xl text-center font-bold mb-2">
            Read More
          </Link>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form onSubmit={handelSignUp} className="bg-white">
          <h1 className="text-gray-800 font-bold text-2xl mb-1">
            Hello{" "}
            {displayFullName ? (
              <span className=" text-pink-500">
                <TypeWriter text={displayFullName + "!"} delay={50} />
              </span>
            ) : (
              "!"
            )}
          </h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Welcome to{" "}
            <span className=" text-pink-500">
              <TypeWriter text={"BookByte"} delay={50} />
            </span>
          </p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
            <input
              onChange={(e) => setDisplayFullName(e.target.value)}
              className="pl-2 outline-none border-none"
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Full name"
            />
          </div>
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
                d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              autoComplete="username"
            />
          </div>
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
          <p className="mt-3">
            If you have account. Please{" "}
            <Link
              to="/login"
              className="text-blue-600 hover:text-sky-500 underline">
              Login
            </Link>{" "}
            Here
          </p>
          <button
            type="submit"
            className="block w-full bg-pink-600 hover:bg-pink-500 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">
            Sign Up
          </button>
          <div className="w-full flex justify-center items-center px-4 py-2">
            <p className="mx-4">SignUp with: </p>
            <button onClick={handleRegisterWithGoogle}>
              <img
                src={googleLogo}
                alt="googleLogo"
                className="w-8 h-8 inline-block"
              />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
