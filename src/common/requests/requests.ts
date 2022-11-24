import axios from "axios";
import { TQuestion } from "../interfaces/interfaces";

const questionsMapper = (
  questions: string[],
  answers: number[][]
): TQuestion[] => {
  const mappedQA = questions.reduce(
    (acc: TQuestion[], currentVal: string, currentIndex: number) => {
      return [...acc, { question: currentVal, answers: answers[currentIndex] }];
    },
    []
  );
  return mappedQA;
};

export const fetchQuestions = async (): Promise<TQuestion[]> => {
  const questionsResponse = await axios.get<string[]>("/db/questions.json");
  const answerResponse = await axios.get<number[][]>("/db/answers.json");
  return questionsMapper(questionsResponse.data, answerResponse.data);
};

export const fetchCorrectAnswers = async (): Promise<number[]> => {
  const response = await axios.get<number[]>("/db/correctAnswers.json");
  return response.data;
};
