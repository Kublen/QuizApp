import React, { ReactElement, useCallback, useState } from "react";
import { TQuestion } from "../../interfaces/interfaces";
import "./Question.styles.scss";

type Props = {
  question: TQuestion;
  setAnswer: (value: number) => void;
  isLastQuestion: boolean;
};

const Question = ({
  question,
  setAnswer,
  isLastQuestion,
}: Props): ReactElement => {
  const [selectedVal, setSelectedVal] = useState<number>();

  const onSubmit = useCallback(() => {
    if (selectedVal) setAnswer(selectedVal);
  }, [selectedVal, setAnswer]);

  return (
    <div className="">
      {question.question}
      <div>
        {question.answers.map((answer, index) => {
          return (
            <>
              <input
                type="radio"
                id={`answer_${index}`}
                value={answer}
                checked={selectedVal === answer}
                onChange={() => setSelectedVal(answer)}
              />
              {answer}
            </>
          );
        })}
      </div>
      <button disabled={!selectedVal} onClick={() => onSubmit()}>
        {!isLastQuestion ? <>NEXT</> : <>FINISH</>}
      </button>
    </div>
  );
};

export default Question;
