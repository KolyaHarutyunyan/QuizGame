import React from "react";

interface QuizGameProps {
    question: string;
    answers: string[];
    callback: any;
    userAnswerExists: boolean;
    questionNumber: number;
    totalQuestions: number;
}

const QuizGame: React.FC<QuizGameProps> = ({
    question,
    answers,
    callback,
    userAnswerExists,
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
                {answers.map((answer, index) => (
                    <div key={index} className="answer-card">
                        <button
                            type="button"
                            className="check-button"
                            onClick={callback}
                            disabled={userAnswerExists}
                        >
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default QuizGame