// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./BannerCards.css";

import { EffectCards } from "swiper/modules";
import { useContext, useEffect, useState } from "react";
import { BookData } from "../store/BookData.store";

export default function BannerCards() {
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

  const startIndex = Math.random() * (bookData.length / 2);
  const endIndex = bookData.length;

  return (
    <div className="banner">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper">
        {books?.slice(startIndex, endIndex)?.map((book) => (
          <SwiperSlide key={book.isbn} className="object-contain">
            <img src={book.coverImgUrl} alt="BookCover" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
