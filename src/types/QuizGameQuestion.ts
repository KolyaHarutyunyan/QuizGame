type QuizGameQuestion = {
    category: string;
    correct_answer: string;
    incorrect_answers: string[];
    difficulty: string;
    question: string;
    type: string;
} & { answers: string[] }

export default QuizGameQuestion;