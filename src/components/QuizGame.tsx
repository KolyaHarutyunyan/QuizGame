import React from "react";
import QuizGameAnswer from "../types/QuizGameAnswer";

interface QuizGameProps {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: QuizGameAnswer | undefined;
    questionNumber: number;
    totalQuestions: number;
}

const QuizGame: React.FC<QuizGameProps> = ({
    question,
    answers,
    callback,
    userAnswer,
    questionNumber,
    totalQuestions
}) => {
    return (
        <div className="quiz-game">
            <p className="question-number">
                Question: {questionNumber} / {totalQuestions}
            </p>
            <p dangerouslySetInnerHTML={{ __html: question }} />
            <div className="answers-container">
                {answers.map((answer, index) => {
                    const isCorrect = userAnswer?.correctAnswer === answer;
                    const isClicked = userAnswer?.answer === answer;

                    return <div key={index} className="answer-card">
                        <button
                            type="button"
                            className={`check-button ${isCorrect ? "correct": isClicked ? "clicked" : ""}`}
                            value={answer}
                            onClick={callback}
                            disabled={!!userAnswer}
                        >
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                })}
            </div>
        </div>
    );
}

export default QuizGame