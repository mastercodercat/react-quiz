import { useMemo } from "react";
import { useHistory } from "react-router-dom";

import { useAppSelector, useAppDispatch } from "store/hooks";
import { RootState } from "store/store";
import { fetchQuestions } from "store/quiz";

const useScore = () => {
  const dispatch = useAppDispatch();
  const { questions, answers } = useAppSelector(
    (state: RootState) => state.quiz
  );
  const history = useHistory();

  const correctCount = useMemo(() => {
    let count = 0;
    for (let i = 0; i < questions.length; i++) {
      if (questions[i].correct_answer === answers[i]) {
        count++;
      }
    }
    return count;
  }, [questions, answers]);

  const handleGoHome = () => {
    history.push("/");
  };

  const handlePlayAgain = async () => {
    await dispatch(fetchQuestions());
    history.push("/quiz/1");
  };

  return {
    correctCount,
    questions,
    answers,
    handleGoHome,
    handlePlayAgain,
  };
};

export default useScore;
