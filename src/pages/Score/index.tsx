import { Button } from "react-bootstrap";

import Layout from "components/Layout";
import ResultItem from "components/ResultItem";

import useScore from "./useScore";

const Score = () => {
  const { correctCount, questions, answers, handleGoHome, handlePlayAgain } =
    useScore();

  return (
    <Layout title={`You scored ${correctCount}/${questions.length}`}>
      {questions.map((question, index) => (
        <ResultItem key={index} question={question} answer={answers[index]} />
      ))}
      <div className="mt-5 d-flex justify-content-between">
        <Button variant="success" onClick={handleGoHome}>
          Go Home
        </Button>
        <Button variant="primary" onClick={handlePlayAgain}>
          Play Again
        </Button>
      </div>
    </Layout>
  );
};

export default Score;
