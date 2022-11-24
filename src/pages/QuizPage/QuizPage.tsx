import React, { ReactElement, useCallback, useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import Results from "../../components/Results/Results";
import { TQuestion } from "../../common/interfaces/interfaces";
import {
  fetchCorrectAnswers,
  fetchQuestions,
} from "../../common/requests/requests";
import "./QuizPage.styles.scss";

const QuizPage = (): ReactElement => {
  const [questions, setQuestions] = useState<TQuestion[] | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [correctAnswers, setCorrectAnswers] = useState<number[] | null>(null);
  const [step, setStep] = useState<number>(0);

  useEffect(() => {
    if (!questions) {
      fetchQuestions().then((data) => {
        setQuestions(data);
      });
    }
  }, [questions]);

  const onSubmit = useCallback(
    (value: number) => {
      const newAnswers = [...userAnswers, value];
      setUserAnswers(newAnswers);
      if (questions && step === questions.length - 1) {
        fetchCorrectAnswers().then((data) => {
          setCorrectAnswers(data);
        });
      }
      setStep(step + 1);
    },
    [questions, step, userAnswers]
  );

  return (
    <div className="quiz-page__wrapper">
      <div className="quiz-page__content">
        {questions && (
          <>
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
              <Results
                userAnswers={userAnswers}
                correctAnswers={correctAnswers}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QuizPage;
