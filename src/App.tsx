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
    <div className="app">
      <div className="game-wrapper">
        <h1 className="game-title">Quiz Game</h1>
        {(gameIsOver || userAnswers.length === TOTAL_QUESTIONS) && (
          <button
            type="button"
            className="start-button"
            onClick={startTrivia}
          >
            Start
          </button>
        )}
        {!gameIsOver && <p className="score">Score: <em>{score}</em></p>}
        {loading && <p className="loading">Loading Questions ...</p>}
        {!loading && !gameIsOver && (
          <QuizGame
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!loading &&
          !gameIsOver &&
          userAnswers.length === number + 1 &&
          number !== TOTAL_QUESTIONS - 1 && (
          <button
            type="button"
            className="next-button"
            onClick={handleNextQuestion}
          >
            Next 
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
