import { createContext, useReducer, useState } from "react";
import axios from "axios";

export const BookData = createContext();

const bookDataReducer = (currBookData, action) => {
  let newBookData = currBookData;
  if (action.type == "FETCHED_DATA") {
    newBookData = action.payload.data;
  } else if (action.type == "ADD_DATA") {
    newBookData = [action.payload.bookObj, ...currBookData];
  } else if (action.type == "UPDATE_DATA") {
    newBookData = [
      ...currBookData,
      {
        ...currBookData.filter((book) => book._id === action.payload.bookId),
        ...action.payload.data,
      },
    ];
  } else if (action.type == "DELETE_DATA") {
    newBookData = currBookData.filter(
      (book) => book._id != action.payload.bookId
    );
  }
  return newBookData;
};

function BookDataProvider({ children }) {
  const [bookData, dispatchBookData] = useReducer(bookDataReducer, []);
  const [dataFetched, setDataFetched] = useState(false);
  const [dataUploaded, setDataUploded] = useState(false);
  const baseUrl = `https://bookbyte-book-selling-app-server.onrender.com/books`;

  const getBookData = (signal) => {
    setDataFetched(true);
    axios
      .get(baseUrl + "/all-books", { signal: signal.token })
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        dispatchBookData({
          type: "FETCHED_DATA",
          payload: { data },
        });
        setDataFetched(false);
      })
      .catch((error) => {
        // console.log("server not fetched:" + error); 
        setDataFetched(false);
        if (error.request) {
          // The request was made but no response was received
          // console.log("No response received:", error.request);
          alert(`something went wrong!!! please refresh the page`);
        }
      });
  };

  const addBookData = (bookObj, signal) => {
    axios
      .post(baseUrl + "/upload-book", bookObj, { signal: signal.token })
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        dispatchBookData({
          type: "ADD_DATA",
          payload: { bookObj },
        });
        setDataUploded(true);
        alert(`book is successfuly uploded!!!`);
      })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          alert(
            `!!! 'isbn' should be unique. please provide unique 'isbn' !!!`
          );
          // console.log('Server responded with an error status:', error.response.status);
          // console.log('Error data:', error.response.data); // This contains the error response data in JSON format
        } else if (error.request) {
          // The request was made but no response was received
          // console.log("No response received:", error.request);
          alert(
            `something went wrong!!! please refresh the page and try to upload the book again!`
          );
        } else {
          // Something happened in setting up the request that triggered an error
          // console.log("Error setting up the request:", error.message);
        }
      });
  };
  const updateBookData = (bookId, newContent, signal) => {
    axios
      .patch(baseUrl + "/" + bookId, newContent, { signal: signal.token })
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        dispatchBookData({
          type: "UPDATE_DATA",
          payload: { _id: bookId, data: newContent },
        });
        alert(`book is successfuly edited!!!`);
      })
      .catch((error) => {
        // console.log("server not fetched:" + error.response);
        if (error.response) {
          // The request was made and the server responded with a status code that falls out of the range of 2xx
          // if(error.response.data.key)
          // console.log('Server responded with an error status:', error.response.status);
          // console.log('Error data:', error.response.data); // This contains the error response data in JSON format
          alert(
            `!!! 'isbn' should be unique. please provide unique 'isbn' !!!`
          );
        } else if (error.request) {
          // The request was made but no response was received
          // console.log("No response received:", error.request);
          alert(
            `something went wrong!!! refresh the page and try to edit book again!`
          );
        }
      });
  };
  const deleteBookData = (bookId, signal) => {
    axios
      .delete(baseUrl + "/" + bookId, { signal: signal.token })
      .then((res) => res.data)
      .then((data) => {
        // console.log(data);
        dispatchBookData({
          type: "DELETE_DATA",
          payload: { bookId },
        });
        alert(`book is successfuly deleted!!!`);
      })
      .catch((error) => {
        e.log("server not fetched:" + error.response);
        if (error.request) {
          // The request was made but no response was received
          // console.log("No response received:", error.request);
          alert(
            `something went wrong!!! refresh the page and try to delete book again!`
          );
        }
      });
  };

  return (
    <BookData.Provider
      value={{
        bookData,
        dataFetched,
        dataUploaded,
        getBookData,
        addBookData,
        updateBookData,
        deleteBookData,
      }}>
      {children}
    </BookData.Provider>
  );
}

export default BookDataProvider;
