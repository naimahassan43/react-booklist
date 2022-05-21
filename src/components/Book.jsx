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
      <h4 style={{color: "#617d98", fontSize:'0.75rem', marginTop:'0.25rem'}}>Megan Miranda</h4>
    </article>
  );
}

export default Book