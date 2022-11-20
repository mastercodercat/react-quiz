import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { FetchQuestionsQuery, QuizState } from "./types";
import api from "../../services/api";

const initialState: QuizState = {
  loading: false,
  total: 0,
  questions: [],
  answers: [],
};

export const fetchQuestions = createAsyncThunk(
  "quiz/fetchQuestions",
  async (
    query: FetchQuestionsQuery = {
      amount: 10,
      difficulty: "hard",
      type: "boolean",
    }
  ) => {
    const { amount, difficulty, type } = query;
    const response = await api.fetchQuestions(amount, difficulty, type);

    return response.data;
  }
);

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setAnswer: (state, action) => {
      const { currentId, answer } = action.payload;
      state.answers[currentId] = answer;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuestions.pending, (state, action) => {
        state.total = 0;
        state.loading = true;
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.questions = action.payload.results;
        state.total = state.questions.length;
        console.log(state.questions);
        state.answers = [];
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        state.loading = false;
      });
  },
});

export const { setAnswer } = quizSlice.actions;

export default quizSlice.reducer;
