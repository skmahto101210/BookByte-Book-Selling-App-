import React, { useContext, useEffect } from "react";
import Banner from "./Banner";
import BestSellerBook from "./BestSellerBook";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "./Review";
import { BookData } from "../store/BookData.store";

export default function Home() {
  const { bookData, getBookData } = useContext(BookData);

  useEffect(() => {
    if (!bookData.length) {
      const controller = new AbortController();
      getBookData(controller.signal);
      return () => {
        controller.abort();
      };
    }
  }, [bookData]);
  return (
    <>
      <Banner />
      <BestSellerBook />
      <FavBook />
      <PromoBanner />
      <OtherBooks />
      <Review />
    </>
  );
}
