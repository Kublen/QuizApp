import React, {
  createContext,
  ReactElement,
  useContext,
  useState,
} from "react";
import { TQuestion } from "../interfaces/interfaces";

const QuestionsContext = createContext<TQuestion[]>([]);

export const useQuestions = (): TQuestion[] => {
  return useContext(QuestionsContext);
};

export const QuestionsProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => {
  const quests: TQuestion[] = [
    {
      question: "1+1",
      answers: [1, 2, 3, 4],
    },
    {
      question: "2+2",
      answers: [1, 2, 3, 4],
    },
  ];
  const [questions, setQuestions] = useState<TQuestion[]>(quests);
  return (
    <QuestionsContext.Provider value={questions}>
      {children}
    </QuestionsContext.Provider>
  );
};
