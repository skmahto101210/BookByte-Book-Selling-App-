import React, { useContext, useState } from "react";
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { BookData } from './../store/BookData.store';

export default function UploadBook() {
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mistry",
    "Programing",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Mamoir",
    "Buisness",
    "Childern Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const { addBookData } = useContext(BookData);

  const handleChangeSelectedValue = (event) => {
    // console.log(event.target.value);
    setSelectedBookCategory(event.target.value);
  };

  //handle book submission
  const handleBookSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const isbn = form.isbn.value;
    const title = form.title.value;
    const author = form.author.value;
    const category = form.category.value;
    const published = form.published.value;
    const price = Number(form.price.value.slice(1));
    // console.log(price);
    const pages = Number(form.pages.value);
    const description = form.description.value;
    const rating = Number(form.rating.value);
    const coverImgUrl = form.coverImgUrl.value;
    const pdfLink = form.pdfLink.value;

    const bookObj = {
      isbn,
      title,
      author,
      category,
      published,
      price,
      coverImgUrl,
      rating,
      pages,
      description,
      pdfLink,
    };

    // console.log(bookObj);
    // fetch databases
    const controller = new AbortController();
    addBookData(bookObj, controller.signal);
    form.reset();

    return () => {
      controller.abort();
    };
  };

  return (
    <div className="px-4 my-12 w-3/4">
      <h2 className="mb-8 text-3xl font-bold">Upload A Book</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex flex-col flex-wrap gap-4">
        {/* 1st-row */}
        <div className="flex gap-8">
          {/* title */}
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Name" />
            </div>
            <TextInput
              id="title"
              name="title"
              type="text"
              placeholder="Book name"
              required
            />
          </div>

          {/* author-name */}
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="author" value="Author" />
            </div>
            <TextInput
              id="author"
              name="author"
              type="text"
              placeholder="Author name"
              required
            />
          </div>
        </div>

        {/* 2th-row */}
        <div className="flex gap-8">
          {/* coverImgUrl */}
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="coverImgUrl" value="Image Url" />
            </div>
            <TextInput
              id="coverImgUrl"
              name="coverImgUrl"
              type="text"
              placeholder="url"
              required
            />
          </div>

          {/* category */}
          <div className="w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Category" />
            </div>

            <Select
              id="inputState"
              required
              name="category"
              className="w-full rounded"
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}>
              {bookCategories?.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>

        {/* 3rd-row */}
        {/* description */}
        <div className="w-1/1">
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea
            id="description"
            name="description"
            placeholder="Write your book description"
            className="w-full"
            row={4}
          />
        </div>

        {/* book-pdf-link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="pdfLink" value="PDF Url" />
          </div>
          <TextInput
            id="pdfLink"
            name="pdfLink"
            type="text"
            placeholder="PDF Link"
            required
          />
        </div>

        <div className="grid gap-7 lg:grid-cols-5 md:grid-cols-3 grid-cols-1">
          {/* published-date */}
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="published" value="Published" />
            </div>
            <TextInput id="published" name="published" type="Date" />
          </div>

          {/* pages */}
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="pages" value="Number of Pages" />
            </div>
            <TextInput
              id="pages"
              name="pages"
              type="number"
              placeholder="pages"
            />
          </div>
          {/* rating */}
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="rating" value="Rating" />
            </div>
            <TextInput
              id="rating"
              name="rating"
              type="number"
              max={5}
              min={0}
              step={0.01}
              placeholder="0-5"
            />
          </div>
          {/* isbn */}
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="isbn" value="ISBN" />
            </div>
            <TextInput
              id="isbn"
              name="isbn"
              type="text"
              minLength={10}
              maxLength={13}
              placeholder="enter only digit"
              required
            />
          </div>
          {/* price */}
          <div className="w-full">
            <div className="mb-2 block">
              <Label htmlFor="price" value="Price" />
            </div>
            <TextInput
              id="price"
              name="price"
              type="text"
              placeholder="$00.00"
              required
              onChange={(e) => {
                let str = e.target.value;
                if (str[0] === "$") {
                  str = str.slice(1);
                }
                e.target.value = !isNaN(Number(str))
                  ? str === ""
                    ? ""
                    : "$" + str
                  : "";
              }}
            />
          </div>
        </div>
        <Button type="submit" className="mt-5">
          Upload Book
        </Button>
      </form>
    </div>
  );
}
