import React, { ReactElement } from "react";
import "./App.styles.scss";
import QuizPage from "./pages/QuizPage/QuizPage";

const App = (): ReactElement => {
  return (
    <div>
      <QuizPage />
    </div>
  );
};

export default App;
