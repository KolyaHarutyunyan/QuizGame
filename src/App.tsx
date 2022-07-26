import QuizGame from "./components/QuizGame";
import useQuizGame from "./hooks/useQuizGame";

const App = () => {
  const { startTrivia, checkAnswer, handleNextQuestion } = useQuizGame();

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
      <QuizGame />
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
