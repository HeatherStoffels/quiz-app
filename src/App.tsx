import React, { useState } from "react";
import QuestionCard from "./Components/QuestionCard";
import {fetchQuizQuestions} from "./API";
import {Difficulty} from "./API";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const TOTAL_QUESTIONS = 10;

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY))

  const startQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>React Quiz</h1>
      <button className="start" onClick={startQuiz}>
        Start!
      </button>
      <p className="score">Score</p>
      <p>Loading</p>
      {/* <QuestionCard 
      questionNumber={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answer}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}

      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
