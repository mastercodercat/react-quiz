export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export interface QuizState {
  loading: boolean;
  total: number;
  questions: Question[];
  answers: string[];
}

export interface FetchQuestionsQuery {
  amount: number;
  difficulty: string;
  type: string;
}
