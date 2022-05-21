import React from 'react'
import './book.css'

// const img =
//   "https://offtheshelf.com/app/uploads/2017/03/All-the-Missing-Girls.jpg";
// const title = "All The Missing Girls";
// const author = "Megan Miranda";

const Book = (props) => {
  return (
    <article className="book">
      <img src={props.img} alt={props.title} />
      <h1>{props.title}</h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {props.author}
      </h4>
    </article>
  );
}

export default Book