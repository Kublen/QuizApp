import React, { ReactElement } from "react";

type Props = {
  answer: number;
  index: number;
  selectedVal: number | null;
  setSelectedVal: (value: number) => void;
};

const QuestionInput = ({
  answer,
  index,
  selectedVal,
  setSelectedVal,
}: Props): ReactElement => {
  return (
    <div className="">
      <input
        type="radio"
        checked={selectedVal === answer}
        onChange={() => setSelectedVal(answer)}
      />
      {answer}
    </div>
  );
};

export default QuestionInput;
