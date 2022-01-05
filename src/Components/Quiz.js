import React, { useState, useEffect } from "react";
import axios from "axios";
import Question from "./Question";
import Answer from "./Answer";
const Quiz = ({ onResult, onFinish }) => {
  const [questions, setQuestions] = useState(null);
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);
  useEffect(() => {
    const getApi = () => {
      axios
        .get(
          "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple"
        )
        .then((res) => setQuestions(res.data.results))
        .catch((err) => console.log(err));
    };
    if (!questions) {
      getApi();
    }
    console.log(questions);
  }, [questions, count, score]);
  if (!questions) return <p className="text-light text-muted">Loading...</p>;
  const answers = [
    ...questions[count].incorrect_answers,
    questions[count].correct_answer,
  ];
  const result = answers.sort(() => Math.random() - 0.5);
  const checkAnswer = (answer) => {
    if (answer === questions[count].correct_answer) {
      console.log(answer);
      setScore(score + 10);
    }
    if (count < questions.length - 1) {
      setCount(count + 1);
    } else {
      onResult(score);
      onFinish(true);
    }
  };
  return (
    <div className="card-body">
      <Question question={questions[count].question} />
      <div className="card-text">
        <div
          className="btn-group btn-group-vertical btn-group-toggle w-100"
          data-toggle="buttons"
        >
          {result.map((answer, index) => (
            <Answer
              key={index}
              answer={answer}
              onAnswer={(answer) => checkAnswer(answer)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz;
