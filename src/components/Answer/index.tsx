import { Form } from "react-bootstrap";

interface AnswerProps {
  answer: string | null;
  onAnswer: (answer: string) => void;
}

const Answer = ({ answer, onAnswer }: AnswerProps) => {
  return (
    <Form className="mt-4">
      <Form.Check
        inline
        label="True"
        type="radio"
        name="answer"
        data-testid="true"
        checked={answer === "True"}
        onChange={() => onAnswer("True")}
      />
      <Form.Check
        inline
        label="False"
        type="radio"
        name="answer"
        data-testid="false"
        checked={answer === "False"}
        onChange={() => onAnswer("False")}
      />
    </Form>
  );
};

export default Answer;
