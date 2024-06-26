import React from "react";
import BannerCards from "./BannerCards";

export default function Banner() {
  return (
    <div className="px-4 lg:px-24 bg-gradient-to-tr from-pink-500 to-pink-50 i flex items-center">
      <div className="flex flex-col md:flex-row  justify-around items-center gap-12 py-40">
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books
            <span className="text-pink-600"> for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
            aliquid reprehenderit aut voluptatibus id! In ad nostrum amet culpa
            cumque labore explicabo praesentium est cupiditate totam! Rerum
            sapiente quibusdam nobis.
          </p>
          <div>
            <input
              type="search"
              name="search"
              placeholder="Search a book"
              className="py-2 px-2 rounded-s-sm outline-none"
            />
          </div>
          <button className="bg-pink-600 px-6 py-2 text-white font-medium hover:bg-pink-700 transition-all ease-in duration-200">
            Search
          </button>
        </div>

        <BannerCards />
      </div>
    </div>
  );
}
