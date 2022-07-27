import { shuffleArray } from "./constants";
import Difficulty from "./enums/Difficulty.";
import QuizGameQuestion from "./types/QuizGameQuestion";

export const fetchQuizGameQuestions = async (
    amount: number,
    difficulty: Difficulty 
): Promise<Array<QuizGameQuestion>> => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
    const parsedData = await (await fetch(endpoint)).json();
    return parsedData.results.map((quizQuestion: QuizGameQuestion) => ({
        ...quizQuestion,
        answers: shuffleArray([...quizQuestion.incorrect_answers, quizQuestion.correct_answer])
    }));
};