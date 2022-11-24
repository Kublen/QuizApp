import React, { ReactElement } from "react";
import "./Results.styles.scss";

type Props = {
  userAnswers: number[];
  correctAnswers: number[];
};

const Results = ({ userAnswers, correctAnswers }: Props): ReactElement => {
  return <div className="">END SCORE</div>;
};

export default Results;
