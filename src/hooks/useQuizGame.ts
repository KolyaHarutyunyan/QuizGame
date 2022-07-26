import React, { useState } from "react";

const useQuizGame = () => {
    const [loading, setLoading] = useState(false);
    const [questions, setQuestions] = useState([]);
    const [number, setNumber] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [score, setScore] = useState(0);
    const [gameIsOver, setGameIsOver] = useState(false);

    const startTrivia = async () => {
        
    };

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