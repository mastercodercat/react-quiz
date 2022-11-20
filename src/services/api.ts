import axios from "axios";
import { toast } from "react-toastify";

import { Question } from "store/quiz/types";

interface FetchQuestionsResponse {
  results: Question[];
}

axios.defaults.baseURL = process.env.REACT_APP_SERVER_API_URL;
axios.defaults.timeout = 2000;

axios.interceptors.response.use(
  (response) => response,
  (error) => {
    const msg = error.response?.data?.msg || "Connection Error!";
    toast.error(msg);
  }
);

const api = {
  fetchQuestions: (amount: number, difficulty: string, type: string) =>
    axios.get<FetchQuestionsResponse>("/", {
      params: { amount, difficulty, type },
    }),
};

export default api;
