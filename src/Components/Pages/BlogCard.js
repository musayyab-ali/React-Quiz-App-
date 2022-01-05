import React from "react";
import { dumlogs } from "./Utils";

const BlogCard = (props) => {
  dumlogs(props);

  return (
    <>
      <div className="App">
        <div className="cards">
          <h2 className="title">{props.title}</h2>
          <p className="discription">{props.discription}</p>
        </div>
      </div>
    </>
  );
};

export default BlogCard;
