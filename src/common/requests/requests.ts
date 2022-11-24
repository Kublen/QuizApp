import axios from "axios";
import { TQuestion } from "../interfaces/interfaces";

export const fetchQuestions = async (): Promise<TQuestion[]> => {
  const response = await axios.get<TQuestion[]>("/db/questions.json");
  return response.data;
};

export const fetchAnswers = async (): Promise<number[]> => {
  const response = await axios.get<number[]>("/db/answers.json");
  return response.data;
};
