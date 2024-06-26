import { Book } from "../models/book.model.js";

const createBook = async (req, res) => {
  const book = new Book(req.body);
  book
    .save()
    .then((doc) => {
      // console.log({ doc });
      res.status(201).json(doc);
    })
    .catch((err) => {
      // console.log(err);
      res.status(400).json(err);
    });
};
const getAllBooks = async (req, res) => {
  const query = { ...req.query };
  try {
    // console.log(query);
    const books = await Book.find(query);
    console.log(books);
    res.status(200).json(books);
  } catch (err) {
    res.status(400).json(err);
  }
};
// const getBook = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const book = await Book.findById(id);
//     res.status(200).json(book);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };
// const replaceBook = async (req, res) => {
//   const id = req.params.id;
//   try {
//     const book = await Book.findOneAndReplace({ _id: id }, req.body, {
//       new: true,
//     });
//     res.status(200).json(book);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// };
const updateBook = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json(err);
  }
};
const deleteBook = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Book.findOneAndDelete({ _id: id });
    res.status(200).json(book);
  } catch (err) {
    res.status(400).json(err);
  }
};

export default {
  getAllBooks,
  //   getBook,
  createBook,
  updateBook,
  deleteBook,
  //   replaceBook,
};
