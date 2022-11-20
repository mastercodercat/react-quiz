import { ListGroup } from "react-bootstrap";
import clsx from "clsx";

import { Question } from "store/quiz/types";

import "./styles.css";

interface ResultItemProps {
  question: Question;
  answer: string;
}

const ResultItem = ({ question, answer }: ResultItemProps) => {
  const isCorrect = question.correct_answer === answer;

  return (
    <ListGroup.Item
      className={clsx({
        "text-white result-item": true,
        "bg-success is-correct": isCorrect,
        "bg-danger": !isCorrect,
      })}
      dangerouslySetInnerHTML={{ __html: question.question }}
    />
  );
};

export default ResultItem;
