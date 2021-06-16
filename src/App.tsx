import React, { useState } from 'react';
import QuestionCard from './Components/QuestionCard';
import { fetchQuizQuestions, Difficulty } from './API';

const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.MEDIUM));

  const startQuiz = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};

  return (
    <div className="App">
      <h1>Music Quiz</h1>
      <button className="start" onClick={startQuiz}>
        Start Quiz
      </button>
      <p className="score">Score: </p>
      <p>Loading Questions...</p>
      {/* <QuestionCard
        question={questions[number].question}
        answers={questions[number].answers}
        callback={checkAnswer}
        userAnswer={userAnswers ? userAnswers[number] : undefined} 
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
};

export default App;
