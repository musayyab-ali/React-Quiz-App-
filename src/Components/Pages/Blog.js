import React, { useState } from "react";
import BlogCard from "./BlogCard";
import { isArrayEmpty } from "./Utils";
// import "./App.css";
const Blog = () => {
  const [state, setstate] = useState();

  const blogArr = [
    {
      id: 1,
      title: "Blog Of News",
      discription:
        "A blog is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries (posts). Posts are typically displayed in reverse chronological order,so that the most recent post appears first, at the top of the web page.",
    },
    {
      id: 2,
      title: "Blog Of Travel",
      discription:
        "A travel blog is simply a blog where the entire focus is on the world of travel. To see where blogging fits into the online marketing world, check out my Introduction to Digital Marketing post",
    },
    {
      id: 3,
      title: "Blog Of Food",
      discription:
        "Food blogging represents a complex interweaving of “foodie” or gourmet interest in cooking with those of blog writing and photography. The majority of blogs use pictures taken by the author himself/herself and some of them focus specifically on food photography. There are different types of Food blogging",
    },
  ];

  const blogtitle = isArrayEmpty(blogArr)
    ? []
    : blogArr.map((item, pos) => {
        return (
          <div className="App">
            <BlogCard
              key={pos}
              title={item.title}
              discription={item.discription}
              id={item.id}
            />
          </div>
        );
      });

  const onbuttonbyclick = () => {
    setstate((value) => {
      return !value;
    });
  };

  return (
    <>
      {/* <button onClick={onbuttonbyclick} type="button" className="button-three">
        Show && Hide Blog 
      </button>
      <div>{state ? blogtitle : null}</div>; */}
      {blogtitle}
    </>
  );
};

export default Blog;
