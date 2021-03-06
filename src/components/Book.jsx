import React from "react";
import "./book.css";

const Book = ({ title, author, img, children }) => {
  // const { title, author, img, children } = props;
  const clickHandler = () => {
    alert('Click event fired')
  }
  const clickAuthor = (author) => {
    
    alert("Author Name: " + author);
  }
  return (
    <article className="book">
      <img src={img} alt={title} style={{ height: "400px", width: "250px" }} />
      <h1>{title}</h1>
      <h4
        style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.25rem" }}
      >
        {author}
      </h4>
      {children}
      <button
        style={{ marginTop: "0.5rem", cursor: "pointer" }}
        type="button"
        onClick={clickHandler}
      >
        Click here
      </button>
      <button
        style={{ marginTop: "0.5rem", cursor: "pointer" }}
        type="button"
        onClick={()=>clickAuthor(author)}
      >
        Author Name
      </button>
    </article>
  );
};

export default Book;
