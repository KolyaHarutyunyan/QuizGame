import React, { useState } from "react";
import { fetchQuizGameQuestions } from "../API";
import { TOTAL_QUESTIONS } from "../constants";
import Difficulty from "../enums/Difficulty.";
import QuizGameAnswer from "../types/QuizGameAnswer";
import QuizGameQuestion from "../types/QuizGameQuestion";

const useQuizGame = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState<Array<QuizGameQuestion>>([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState<Array<QuizGameAnswer>>([]);
    const [score, setScore] = useState(0);
    const [gameIsOver, setGameIsOver] = useState(true);

    const startTrivia = async (): Promise<void> => {
        setLoading(true);
        setGameIsOver(false);
        const quizGameQuestions = await fetchQuizGameQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
        setQuestions(quizGameQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>): void => {
        if (!gameIsOver) {
            const answer = e.currentTarget.value;
            const answerIsCorrect = questions[number].correct_answer === answer;
            if (answerIsCorrect) {
                setScore(prevState => prevState + 1);
            }
            const answerObject = {
                question: questions[number].question,
                answer,
                isCorrect: answerIsCorrect,
                correctAnswer: questions[number].correct_answer
            };
            setUserAnswers(prevState => [...prevState, answerObject]);
        }
    };

    const handleNextQuestion = (): void => {
        const nextQuestion = number + 1;
        if (nextQuestion === TOTAL_QUESTIONS) {
            setGameIsOver(true);
        } else {
            setNumber(nextQuestion);
        }
    };

    return {
        loading,
        questions,
        number,
        userAnswers,
        score,
        gameIsOver,
        startTrivia,
        checkAnswer,
        handleNextQuestion,
    };
};

export default useQuizGame;