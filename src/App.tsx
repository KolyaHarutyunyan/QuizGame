import QuizGame from "./components/QuizGame";
import { TOTAL_QUESTIONS } from "./constants";
import useQuizGame from "./hooks/useQuizGame";

const App = () => {
  const {
    loading,
    questions,
    number,
    userAnswers,
    score,
    gameIsOver,
    startTrivia,
    checkAnswer,
    handleNextQuestion
  } = useQuizGame();

  return (
    <div className="App">
      <h1>Quiz Game</h1>
      <button
        type="button"
        className="start-button"
        onClick={startTrivia}
      >
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      {/* <QuizGame
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswerExists={!!userAnswers.length}
        callback={checkAnswer}
      /> */}
      <button
        type="button"
        className="next-button"
        onClick={handleNextQuestion}
      >
        Next Question
      </button>
    </div>
  );
}

export default App;
