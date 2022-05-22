import React from "react";
import Book from "./Book";
import "./book.css";

const books = [
  {
    img: "https://offtheshelf.com/app/uploads/2019/12/Goergeous-Lies.jpg",
    title: "Gorgeous Lies",
    author: "Martha McPhee",
  },
  {
    img: "https://offtheshelf.com/app/uploads/2017/03/All-the-Missing-Girls.jpg",
    title: "All The Missing Girls",
    author: "Megan Miranda",
  },
  {
    img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982112301/the-winemakers-wife-9781982112301_xlg.jpg",
    title: "The Winemaker's Wife",
    author: "Kristin Harmel",
  },
  {
    img: "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781501187933/the-daughters-tale-9781501187933_xlg.jpg",
    title: "The Daughter's Tale",
    author: "Armando Lucas Correa",
  },
];

function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
      
        return <Book book={book}></Book>;
      })}
    </section>
  );
}

export default BookList;
