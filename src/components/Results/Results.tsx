import React, { ReactElement, useCallback, useEffect, useState } from "react";
import "./Results.styles.scss";

type Props = {
  userAnswers: number[];
  correctAnswers: number[] | null;
};

const Results = ({ userAnswers, correctAnswers }: Props): ReactElement => {
  const [gradePercent, setGradePercent] = useState<number | null>(null);

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

  const selectGradeLabel = useCallback((grade: number) => {
    if (grade >= 0 && grade <= 40) return "Diligent failure";
    if (grade >= 41 && grade <= 60) return "Failed";
    if (grade >= 61 && grade <= 80) return "Good";
    if (grade >= 81 && grade <= 90) return "Very good";
    if (grade >= 91 && grade <= 100) return "Excellent";
  }, []);

  useEffect(() => {
    if (correctAnswers) {
      const grade = calculateGradePercent();
      setGradePercent(grade);
    }
  }, [calculateGradePercent, correctAnswers]);

  return (
    <div className="results__wrapper">
      {gradePercent && (
        <>
          <h3>END SCORE: {gradePercent}%</h3>
          <h1>{selectGradeLabel(gradePercent)?.toUpperCase()}</h1>
        </>
      )}
    </div>
  );
};

export default Results;
