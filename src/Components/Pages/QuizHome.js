import React, { useState } from "react";
import Quiz from "./Quiz";
import Result from "./Result";
// import "bootstrap/dist/css/bootstrap.css";

const QuizHome = () => {
  const [finish, setFinish] = useState(false);
  const [result, setResult] = useState(0);
  return (
    <>
      <div className="App">
        <div className="container blogcard">
          <div className="row">
            <div className="col-md-12">
              <div className="card text-white bg-dark mb-3 shadow border-black rounded">
                <div className="card-header blogcard">
                  <h2>Welcome To The Home of React Quiz</h2>
                </div>
                {finish ? (
                  <Result result={result} onFinish={() => setFinish(false)} />
                ) : (
                  <Quiz
                    onResult={(result) => setResult(result)}
                    onFinish={(finish) => setFinish(finish)}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default QuizHome;
