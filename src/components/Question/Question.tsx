import React, { ReactElement, useCallback, useState } from "react";
import { TQuestion } from "../../common/interfaces/interfaces";
import "./Question.styles.scss";
import QuestionButton from "./QuestionButton/QuestionButton";
import QuestionInput from "./QuestionInput/QuestionInput";

type Props = {
  question: TQuestion;
  onSubmit: (value: number) => void;
  isLastQuestion: boolean;
};

const Question = ({
  question,
  onSubmit,
  isLastQuestion,
}: Props): ReactElement => {
  const [selectedVal, setSelectedVal] = useState<number | null>(null);

  const onSubmitVal = useCallback(() => {
    if (selectedVal) onSubmit(selectedVal);
    setSelectedVal(null);
  }, [onSubmit, selectedVal]);

  return (
    <div className="question__wrapper">
      <h2>Question: {question.question}?</h2>
      {question.answers.map((answer, index) => {
        return (
          <QuestionInput
            key={`key_${index}`}
            answer={answer}
            index={index}
            selectedVal={selectedVal}
            setSelectedVal={setSelectedVal}
          />
        );
      })}
      <QuestionButton
        isDisabled={!selectedVal}
        isLastQuestion={isLastQuestion}
        onSubmit={onSubmitVal}
      />
    </div>
  );
};

export default Question;
