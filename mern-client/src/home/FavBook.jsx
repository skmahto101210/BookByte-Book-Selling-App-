import React from "react";
import FavBookImg from "../assets/favBooks.jpg";
import { Link } from "react-router-dom";

export default function FavBook() {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img src={FavBookImg} alt="FavBookImg" className="rounded md:w-10/12" />
      </div>
      <div className="md:w-1/2 space-x-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          {" "}
          Find Your Favorite<span className="text-pink-500"> Book Here!</span>
        </h2>
        <p className="my-10 text-lg md:w-3/4">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis,
          molestias consequuntur fugiat hic tempore illo vitae doloribus
          repellat, alias neque nesciunt aspernatur dolore distinctio, saepe
          doloremque. Sed sequi corporis similique.
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4">
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-base">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">550+</h3>
            <p className="text-base">Register Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-base">PDF Downloded</p>
          </div>
        </div>
        <Link to="/shop" className="mt-12 block">
          <button className="bg-pink-500 text-white font-semibold px-5 py-2 rounded hover:bg-pink-700 transition-all duration-300">
            Explor More
          </button>
        </Link>
      </div>
    </div>
  );
}
