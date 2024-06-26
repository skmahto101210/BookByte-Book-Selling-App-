import React, { useContext, useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./BookCards.component.css";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { BookData } from "../store/BookData.store";

export default function BookCards({ headline }) {
  const { bookData, getBookData } = useContext(BookData);
  const [books, setBooks] = useState();

  useEffect(() => {
    setBooks(bookData);
    if (!bookData?.length) {
      const controller = new AbortController();
      getBookData(controller.signal);
      setBooks(bookData);
      return () => controller.abort();
    }
  }, [bookData]);
  // const startIndex = Math.random() * (bookData.length / 2);
  // const endIndex = bookData.length;

  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-5xl text-center font-bold text-black my-5">
        {headline}
      </h2>

      {/* cards */}
      <div className="bookCard">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper">
          {books?.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/books/${book._id}`}>
                <div className="relative">
                  <img src={book.coverImgUrl} alt="coverImage" />
                  <div className="absolute top-3 right-3 bg-pink-500 hover:bg-pink-700 p-2 rounded">
                    <FaCartShopping className="w-4 h-4 text-white" />
                  </div>
                </div>
                <div>
                  <div>
                    <p>{book.title}</p>
                    <p>
                      <span className="text-gray-500">Author </span>
                      {/* {book?.author?.map((author) => author + " ")} */}
                    </p>
                  </div>
                  <div>
                    <p className="text-pink-600">${book.price}</p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
