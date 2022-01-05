import React from "react";

const Answer = ({ answer, onAnswer }) => {
  return (
    <>
      <label className="btn btn-lg  btn-secondary my-1 discription">
        <input
          type="radio"
          name="options"
          id="option1"
          onClick={() => onAnswer(answer)}
        />
        <span dangerouslySetInnerHTML={{ __html: answer }}></span>
      </label>
    </>
  );
};

export default Answer;
