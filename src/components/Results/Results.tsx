import React, { ReactElement, useState } from "react";
import { TQuestion } from "../../interfaces/interfaces";
import "./Results.styles.scss";

type Props = {
  userAnswers: number[];
};

const Results = ({ userAnswers }: Props): ReactElement => {
  return <div className="">END SCORE</div>;
};

export default Results;
