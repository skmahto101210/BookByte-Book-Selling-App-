import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Avatar } from "flowbite-react";
import proPic from "../assets/proPic.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Review.css";

// import required modules
import { Pagination } from "swiper/modules";
import { FaStar } from "react-icons/fa6";

export default function Review() {
  return (
    <div className="my-12 px-14 lg:px-24">
      <h2 className="my-5 text-5xl font-bold text-center leading-snug">
        Our Customers
      </h2>
      <div className="review">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper">
          <SwiperSlide className=" shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div>
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="text-left mt-7">
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  quos iure doloribus quaerat voluptatibus doloremque natus
                  voluptas quisquam ducimus eum et inventore numquam enim modi
                  quod, aliquid, dolorem corporis maiores.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 my-2"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div>
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="text-left mt-7">
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  quos iure doloribus quaerat voluptatibus doloremque natus
                  voluptas quisquam ducimus eum et inventore numquam enim modi
                  quod, aliquid, dolorem corporis maiores.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 my-2"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div>
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="text-left mt-7">
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  quos iure doloribus quaerat voluptatibus doloremque natus
                  voluptas quisquam ducimus eum et inventore numquam enim modi
                  quod, aliquid, dolorem corporis maiores.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 my-2"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className=" shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div>
              <div className=" text-amber-500 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              {/* text */}
              <div className="text-left mt-7">
                <p className="mb-5">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet
                  quos iure doloribus quaerat voluptatibus doloremque natus
                  voluptas quisquam ducimus eum et inventore numquam enim modi
                  quod, aliquid, dolorem corporis maiores.
                </p>
                <Avatar
                  img={proPic}
                  alt="avatar of Jese"
                  rounded
                  className="w-10 my-2"
                />
                <h5 className="text-lg font-medium">Mark Ping</h5>
                <p className="text-base">CEO, ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
