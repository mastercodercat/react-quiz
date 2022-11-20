import { Button } from "react-bootstrap";

import Layout from "components/Layout";
import Answer from "components/Answer";
import Question from "components/Question";

import useQuiz from "./useQuiz";

const Quiz = () => {
  const {
    currentId,
    question,
    answer,
    total,
    handleAnswer,
    handleNext,
    handleExit,
  } = useQuiz();

  if (!question) {
    return null;
  }

  return (
    <Layout title={question.category}>
      <Question question={question.question} />
      <Answer answer={answer} onAnswer={handleAnswer} />
      <h6 className="my-5">
        Question {currentId}/{total}
      </h6>
      <div className="d-flex justify-content-between">
        <Button variant="danger" className="px-4 py-2" onClick={handleExit}>
          Exit
        </Button>
        <Button variant="primary" className="px-4 py-2" onClick={handleNext}>
          Next
        </Button>
      </div>
    </Layout>
  );
};

export default Quiz;
