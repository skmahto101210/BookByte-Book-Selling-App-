import express from "express";
import bookController from "../controllers/book.controller.js";

const router = express.Router();

router
    .get("/all-books", bookController.getAllBooks)
    // .get("/:id", bookController.getBook)
    .post("/upload-book", bookController.createBook)
    // .put("/:id", bookController.replaceBook)
    .patch("/:id", bookController.updateBook)
    .delete("/:id", bookController.deleteBook);

 
export default { router };
  