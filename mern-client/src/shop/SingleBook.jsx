import React, { useContext, useEffect, useRef, useState } from "react";
import { BookData } from "../store/BookData.store";
import { Link, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa6";

export default function SingleBook() {
  const [shrink, setShrink] = useState(true);
  const { bookData, getBookData } = useContext(BookData);
  const [books, setBooks] = useState();
  const { id } = useParams();

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
    <div className="mt-28 ps-4 lg:px-24">
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 md:w-4/5 mx-auto flex flex-wrap h-full justify-around items-center shadow-gray-900 shadow-lg backdrop-blur-sm py-10 px-24">
            {books?.map(
              (book, index) =>
                book._id === id && (
                  <>
                    <img
                      key={index}
                      alt="ecommerce"
                      className="md:w-2/3 lg:w-5/12 h-fit object-contain object-center rounded border border-gray-200 md:m-auto lg:m-0  shadow-gray-600 shadow-lg backdrop-blur-sm"
                      src={book.coverImgUrl}
                    />
                    <div
                      key={index + 1}
                      className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col justify-center">
                      <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                        {book.title}
                      </h1>
                      <h2 className="text-sm title-font text-gray-500 tracking-widest">
                        {/* {book.author?.map((author) => author + " ")} */}
                      </h2>
                      <div className="my-4">
                        {/* <span className="flex items-center"> */}
                        {/* {Array(Math.round(book.rating))?.map((index) => (
                             <FaStar key={index} />
                          ))} */}
                        <span className="text-gray-600">
                          {book.rating} Star Rating
                        </span>
                        {/* </span> */}
                      </div>
                      <p
                        className={`leading-relaxed text-pretty ${
                          shrink && "h-40 overflow-hidden"
                        }`}>
                        {book.description}
                      </p>
                      <svg
                        onClick={() => setShrink(!shrink)}
                        data-accordion-icon
                        className={`w-3 h-3 ${shrink && "rotate-180"} shrink-0`}
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6">
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5 5 1 1 5"
                        />
                      </svg>
                      <div className="flex border-t-2 pt-4 mt-5">
                        <span className="title-font font-medium text-2xl   text-gray-900">
                          ${book.price}
                        </span>
                        <Link
                          to={book.pdfLink}
                          className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded">
                          Buy
                        </Link>
                      </div>
                    </div>
                  </>
                )
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
