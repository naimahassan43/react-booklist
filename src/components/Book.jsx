import React from 'react'
import './book.css'


const Book = () => {
  return (
    <article className="book">
      <img
        src="https://offtheshelf.com/app/uploads/2017/03/All-the-Missing-Girls.jpg"
        alt="All-the-Missing-Girls"
      />
      <h1>All The Missing Girls</h1>
      <p>Megan Miranda</p>
    </article>
  );
}

export default Book