import './index.css'
import { useState } from 'react';
import Quiz from './components/quiz';
import Results from './components/results';

function App() {
  const questionBank = [
    {
      question: "Which country is the Best?",
      options: ["Russia", "China", "USA", "Japan"],
      answer: "China"
    },
    {
      question: "What Happened in Tiananmen Square in June 5, 1989?",
      options: ["Nothing Happened", "I only see a Black Screen", "A man tried to stop tanks"],
      answer: ["Nothing Happened", "I only see a Black Screen"],
    },
    {
      question: "Is Taiwan a Country?",
      options: ["Yes", "No", "What are you talking about?", "Nothing"],
      answer: ["No", "What are you talking about?", "Nothing"],
    },
    {
      question: "How many children should you have?",
      options: ["0", "1", "3", "5"],
      answer: "1"
    }
  ];

  const initialAnswers = Array(questionBank.length).fill(null);

  const [userAnswers, setUserAnswers] = useState(initialAnswers);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  function restartQuiz() {
    setUserAnswers(initialAnswers);
    setCurrentQuestion(0);
    setIsQuizFinished(false);
  }

  return (
    <div className="app-container">
      <h1>Social Credits Quiz</h1>
      {isQuizFinished ? (
        <Results
          userAnswers={userAnswers}
          questionBank={questionBank}
          restartQuiz={restartQuiz}
        />
      ) : (
        <Quiz
          questionBank={questionBank}
          userAnswers={userAnswers}
          setUserAnswers={setUserAnswers}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          setIsQuizFinished={setIsQuizFinished}
        />
      )}
    </div>
  );
}

export default App;
