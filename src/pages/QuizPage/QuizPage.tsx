import React, { ReactElement, useCallback, useEffect, useState } from "react";
import Question from "../../components/Question/Question";
import Results from "../../components/Results/Results";
import { useQuestions } from "../../state/QuestionsContext";
import "./QuizPage.styles.scss";

const QuizPage = (): ReactElement => {
  const questions = useQuestions();
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [step, setStep] = useState<number>(0);

  const setAnswer = useCallback(
    (value: number) => {
      const newAnswers = [...userAnswers, value];
      setUserAnswers(newAnswers);
      setStep(step + 1);
    },
    [step, userAnswers]
  );

  useEffect(() => {
    console.log(userAnswers);
  }, [userAnswers]);

  return (
    <div className="">
      {step < questions.length ? (
        <>
          {questions[step] && (
            <Question
              question={questions[step]}
              setAnswer={setAnswer}
              isLastQuestion={step === questions.length - 1}
            />
          )}
        </>
      ) : (
        <Results userAnswers={userAnswers} />
      )}
    </div>
  );
};

export default QuizPage;
