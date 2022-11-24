import React, { ReactElement, useCallback, useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import Results from "../../components/Results/Results";
import { TQuestion } from "../../common/interfaces/interfaces";
import { fetchAnswers, fetchQuestions } from "../../common/requests/requests";
import "./QuizPage.styles.scss";

const QuizPage = (): ReactElement => {
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number[]>([]);
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    fetchQuestions().then((data) => {
      setQuestions(data);
    });
  }, []);

  const onSubmit = useCallback(
    (value: number) => {
      if (step < questions.length) {
        const newAnswers = [...userAnswers, value];
        setUserAnswers(newAnswers);
        setStep(step + 1);
      } else {
        fetchAnswers().then((data) => {
          setCorrectAnswers(data);
        });
      }
    },
    [questions.length, step, userAnswers]
  );

  return (
    <div className="">
      {step < questions.length ? (
        <>
          {questions[step] && (
            <Question
              question={questions[step]}
              onSubmit={onSubmit}
              isLastQuestion={step === questions.length - 1}
            />
          )}
        </>
      ) : (
        <Results userAnswers={userAnswers} correctAnswers={correctAnswers} />
      )}
    </div>
  );
};

export default QuizPage;
