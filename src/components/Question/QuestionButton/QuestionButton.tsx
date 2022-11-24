import React, { ReactElement } from "react";

type Props = {
  isDisabled: boolean;
  isLastQuestion: boolean;
  onSubmit: () => void;
};

const QuestionButton = ({
  isDisabled,
  isLastQuestion,
  onSubmit,
}: Props): ReactElement => {
  return (
    <button disabled={isDisabled} onClick={() => onSubmit()}>
      {!isLastQuestion ? <>Next</> : <>Finish</>}
    </button>
  );
};

export default QuestionButton;
