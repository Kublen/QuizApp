import React, { ReactElement } from "react";
import "./App.styles.scss";
import QuizPage from "./pages/QuizPage/QuizPage";
import { QuestionsProvider } from "./state/QuestionsContext";

const App = (): ReactElement => {
  return (
    <QuestionsProvider>
      <QuizPage />
    </QuestionsProvider>
  );
};

export default App;
