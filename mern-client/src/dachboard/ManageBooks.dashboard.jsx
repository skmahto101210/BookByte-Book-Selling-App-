import React, { useContext, useEffect, useRef, useState } from "react";
import { Table } from "flowbite-react";
import { BookData } from "../store/BookData.store";
import { Link } from "react-router-dom";

export default function ManageBooks() {
  const { bookData, getBookData, deleteBookData } = useContext(BookData);
  const [books, setBooks] = useState();

  useEffect(() => {
    setBooks(bookData);
    if (!bookData.length) {
      const controller = new AbortController();
      getBookData(controller.signal);
      setBooks(bookData);
      return () => controller.abort();
    }
  }, [bookData]);

  const handleDeleteBook = (bookId) => {
    const controller = new AbortController();
    deleteBookData(bookId, controller.signal);
    return () => {
      controller.abort();
    };
  };
  return (
    <div className="px-4 my-12 w-full">
      <h2 className="mb-8 text-3xl font-bold">Manage Your Book</h2>
      <Table className="lg:w-3/4">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {books?.map((book, index) => (
          <Table.Body className="divide-y" key={book._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {book.title}
              </Table.Cell>
              <Table.Cell>{book.author}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>${book.price}</Table.Cell>
              <Table.Cell>
                <Link
                  to={`/admin/dashboard/edit-books/${book._id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5">
                  Edit
                </Link>
                <button
                  onClick={() => {
                    handleDeleteBook(book._id);
                  }}
                  className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-500">
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
}
