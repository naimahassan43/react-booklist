import React from "react";
import Book from "./Book";
import "./book.css";

const fBook = {
  img: "https://offtheshelf.com/app/uploads/2019/12/Goergeous-Lies.jpg",
  title: "Gorgeous Lies",
  author: "Martha McPhee",
};
const sBook = {
  img: "https://offtheshelf.com/app/uploads/2017/03/All-the-Missing-Girls.jpg",
  title: "All The Missing Girls",
  author: "Megan Miranda",
};


function BookList() {
  return (
    <section className="booklist">
      <Book img={fBook.img} title={fBook.title} author={fBook.author} />
      <Book img={sBook.img} title={sBook.title} author={sBook.author} />
    </section>
  );
}

export default BookList;
