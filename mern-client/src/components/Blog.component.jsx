import React from "react";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <div className="w-screen h-screen flex justify-center items-center flex-col">
      <div className="font-semibold text-4xl leading-snug">
        Sorry! Blog Page not active Now
      </div>
      <Link to="/" className="text-red-600 underline hover:text-blue-500">
        Go to Home
      </Link>
    </div>
  );
}
