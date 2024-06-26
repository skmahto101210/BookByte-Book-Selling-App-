import React, { useContext, useEffect, useState } from "react";
import BookCards from "../components/BookCards.component";
import { BookData } from "../store/BookData.store";

export default function OtherBooks() {
  return (
    <div>
      <BookCards
        headline={"Other Books"}
      />
    </div>
  );
}
