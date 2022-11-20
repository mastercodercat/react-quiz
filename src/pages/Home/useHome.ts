import { useHistory } from "react-router-dom";

import { useAppDispatch } from "store/hooks";
import { fetchQuestions } from "store/quiz";

const useHome = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();

  const handleBegin = async () => {
    await dispatch(fetchQuestions());
    history.push("/quiz/1");
  };

  return {
    handleBegin,
  };
};

export default useHome;
