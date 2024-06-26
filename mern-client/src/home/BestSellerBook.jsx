import React, { useContext, useEffect } from "react";
import BookCards from "../components/BookCards.component";
import { BookData } from "../store/BookData.store";

export default function BestSellerBook() {

  return (
    <div>
      <BookCards
        headline="Best Seller Book"
      />
    </div>
  );
}
