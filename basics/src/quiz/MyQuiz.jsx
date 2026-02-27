import { useState } from "react";
import "./MyQuiz.css"; // Link to your separate CSS file

const questions = [
  {
    id: 1,
    question: "What is 2 + 2?",
    options: ["2", "3", "4", "5"],
    answer: "4"
  },
  {
    id: 2,
    question: "What is the capital of France?",
    options: ["Paris", "Rome", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    id: 3,
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  }
];

function QuizApp() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState("");

  function handleOptionClick(option) {
    setSelectedOption(option);

    if (option === questions[questionIndex].answer) {
      setScore(prev => prev + 1);
      setFeedback("Good job yayayay!");
    } else {
      setFeedback("Wrong answer ish ben sedddd!");
    }
  }

  function handleNextQuestion() {
    setFeedback("");
    setSelectedOption(null);
    setQuestionIndex(prev => prev + 1);
  }

  function handleRestart() {
    setQuestionIndex(0);
    setScore(0);
    setSelectedOption(null);
    setFeedback("");
  }

  return (
    <div className="quiz-container">
      {questionIndex >= questions.length ? (
        <div className="result-section">
          <h1>Your score: {score}</h1>
          <button className="restart-btn" onClick={handleRestart}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <div className="question-section">
          <h2 className="question">{questions[questionIndex].question}</h2>
          <div className="options-container">
            {questions[questionIndex].options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${
                  selectedOption
                    ? option === questions[questionIndex].answer
                      ? "correct"
                      : option === selectedOption
                      ? "wrong"
                      : ""
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
                disabled={!!selectedOption}
              >
                {option}
              </button>
            ))}
          </div>

          {feedback && (
            <h3 className={`feedback ${selectedOption === questions[questionIndex].answer ? "correct" : "wrong"}`}>
              {feedback}
            </h3>
          )}

          {feedback && questionIndex < questions.length && (
            <button className="next-btn" onClick={handleNextQuestion}>
              Next
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default QuizApp;


