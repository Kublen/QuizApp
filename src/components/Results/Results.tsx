import React, { ReactElement, useCallback, useEffect, useState } from "react";
import "./Results.styles.scss";

type Props = {
  userAnswers: number[];
  correctAnswers: number[] | null;
};

const Results = ({ userAnswers, correctAnswers }: Props): ReactElement => {
  const [gradePercent, setGradePercent] = useState<number>(0);

  const calculateGradePercent = useCallback(() => {
    if (correctAnswers) {
      let correctCount = 0;
      correctAnswers?.forEach((answer, index) => {
        if (answer === userAnswers[index]) correctCount += 1;
      });
      return (correctCount * 100) / correctAnswers.length;
    }
    return 0;
  }, [correctAnswers, userAnswers]);

  const selectGradeLabel = useCallback(() => {
    if (gradePercent >= 0 && gradePercent <= 40) return "Diligent failure";
    if (gradePercent >= 41 && gradePercent <= 60) return "Failed";
    if (gradePercent >= 61 && gradePercent <= 80) return "Good";
    if (gradePercent >= 81 && gradePercent <= 90) return "Very good";
    if (gradePercent >= 91 && gradePercent <= 100) return "Excellent";
  }, [gradePercent]);

  useEffect(() => {
    if (correctAnswers) {
      const grade = calculateGradePercent();
      setGradePercent(grade);
    }
  }, [calculateGradePercent, correctAnswers]);

  return (
    <div className="results__wrapper">
      <h3>END SCORE: {gradePercent}%</h3>
      <h1>{selectGradeLabel()?.toUpperCase()}</h1>
    </div>
  );
};

export default Results;
