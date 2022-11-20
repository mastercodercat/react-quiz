import { Button } from "react-bootstrap";

import Layout from "components/Layout";
import useHome from "./useHome";

const Home = () => {
  const { handleBegin } = useHome();

  return (
    <Layout title="Welcome to the Trivia Challenge!">
      <h3 className="text-center">
        You will be presented with 10 True or False questions
      </h3>
      <h3 className="text-center my-5">Can you score 100%?</h3>
      <Button
        variant="primary"
        onClick={handleBegin}
        className="d-block mx-auto px-4 py-2"
      >
        Begin
      </Button>
    </Layout>
  );
};

export default Home;
