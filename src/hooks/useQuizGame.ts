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
    const [gameIsOver, setGameIsOver] = useState(false);

    const startTrivia = async () => {
        setLoading(true);
        setGameIsOver(false);
        const quizGameQuestions = await fetchQuizGameQuestions(TOTAL_QUESTIONS, Difficulty.EASY);
        setQuestions(quizGameQuestions);
        setScore(0);
        setUserAnswers([]);
        setNumber(0);
        setLoading(false);
    };

    console.log(questions);

    const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    };

    const handleNextQuestion = () => {

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