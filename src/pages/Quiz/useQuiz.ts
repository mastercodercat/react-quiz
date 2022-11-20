import { useMemo, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

import { RootState } from "store/store";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { setAnswer } from "store/quiz";

import { RouteLink } from "Routes";

const useQuiz = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const { id } = useParams<{ id?: string }>();
  const { total, questions, answers } = useAppSelector(
    (state: RootState) => state.quiz
  );

  const currentId = useMemo(() => (id ? parseInt(id) : 0), [id]);

  useEffect(() => {
    if (total === 0) {
      history.push(RouteLink.Home);
      return;
    }
    if (currentId < 0 || currentId > total) {
      history.push(RouteLink.Score);
    }
  }, [currentId, total, questions, history]);

  const question = questions[currentId - 1];
  const answer = answers[currentId - 1];

  const handleAnswer = (answer: string) => {
    dispatch(setAnswer({ currentId: currentId - 1, answer }));
  };

  const handleNext = () => {
    history.push(`/quiz/${currentId + 1}`);
  };

  const handleExit = () => {
    history.push(RouteLink.Home);
  };

  return {
    currentId,
    total,
    question,
    answer,
    handleAnswer,
    handleNext,
    handleExit,
  };
};

export default useQuiz;
