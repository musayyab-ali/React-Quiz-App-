import React from "react";

const Result = ({ result, onFinish }) => {
  return (
    <React.Fragment>
      <h2 className="blogcard">Result: {result}</h2>
      <button
        className="blogcard"
        onClick={() => {
          onFinish(false);
        }}
      >
        Play Again
      </button>
    </React.Fragment>
  );
};

export default Result;
