import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function LogIn() {
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
      <Outlet />
    </div>
  );
}
