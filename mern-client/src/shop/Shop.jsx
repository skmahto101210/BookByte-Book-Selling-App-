import React, { useContext, useEffect, useState } from "react";
import { BookData } from "../store/BookData.store";
import { Card } from "flowbite-react";
import { Link } from "react-router-dom";

export default function Shop() {
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

  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books are Here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-clols-2 md:grid-cols-3 grid-cols-1">
        {books?.map((book) => (
          <Card className="max-w-sm">
            <Link to={`/books/${book._id}`}>
              <img
                src={book.coverImgUrl}
                alt={book.title}
                className="w-full h-full hover:scale-105 "
              />
            </Link>
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {book.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {book.description.slice(0, 100)} . . .
            </p>
            <Link
              to={book.pdfLink}
              className="bg-pink-600 hover:bg-pink-500  font-semibold text-white py-2 rounded text-center">
              Buy Now
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
}
