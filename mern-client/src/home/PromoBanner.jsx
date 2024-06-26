import React from "react";
import { Link } from "react-router-dom";
import bookPic from "../assets/awardedBook.png";

export default function PromoBanner() {
  return (
    <div className="mt-16 py-12 bg-pink-100 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug ">
            2022 National Book Awards for Fiction Shortlist
          </h2>

          <Link to="/shop" className="mt-12 block">
            <button className="bg-pink-500 text-white font-semibold px-5 py-2 rounded hover:bg-pink-700 transition-all duration-300">
              Get Promo
            </button>
          </Link>
        </div>

        <div>
          <img src={bookPic} alt="" className="w-96 mr-10" />
        </div>
      </div>
    </div>
  );
}
