import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    isbn: {
      type: String,
      required: [true, "please provide isbn number"],
      unique: [true, "your isbn is not unique. please provide unique isbn!!!"],
      // match: /^(?:ISBN(?:-13)?:?\s)?(?=[0-9]{13}$|(?=(?:[0-9]+[-\s]){3})[-\s0-9]{17}$)(?:97[89][-\s])?[0-9]{1,5}[-\s]?[0-9]+[-\s]?[0-9]+[-\s]?[0-9]+$/,
    },
    title: {
      type: String,
      required: [true, "please provide title"],
    },
    author: [
      {
        type: String,
        required: [true, "please provide author name"],
      },
    ],
    category: {
      type: String,
      required: [true, "please provide catagory"],
    },
    published: {
      type: Date,
      validate: {
        // Validate that the date is in the past (before the current date)
        validator: (value) => value < new Date(),
        message: "Date must be in the past",
      },
    },
    price: {
      type: Number,
      required: [true, "please provide price"],
      min: [0, "wrong min price"],
    },
    pages: {
      type: Number,
      min: [1, "wrong min pages"],
    },
    description: String,
    rating: {
      type: Number,
      default: 0,
      min: [0, "wrong min rating"],
      max: [5, "wrong max rating"],
    },
    coverImgUrl: {
      type: String,
      required: [true, "please provide cover-image-url"],
    },
    pdfLink: {
      type: String,
      required: [true, "please provide pdfUrl"],
    },
  },
  { timestamps: true }
);

export const Book = mongoose.model("Book", bookSchema);
