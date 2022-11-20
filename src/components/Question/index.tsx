interface QuestionProps {
  question: string;
}

const Question = ({ question }: QuestionProps) => {
  return <div dangerouslySetInnerHTML={{ __html: question }}></div>;
};

export default Question;
