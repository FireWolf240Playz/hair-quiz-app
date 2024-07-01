import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answers: JSON.parse(localStorage.getItem("quizAnswers")) || [],
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer: (state, action) => {
      const { questionId, category, answer } = action.payload;
      const existingAnswerIndex = state.answers.findIndex(
        (ans) => ans.questionId === questionId
      );
      if (existingAnswerIndex >= 0) {
        state.answers[existingAnswerIndex] = { questionId, category, answer };
      } else {
        state.answers.push({ questionId, category, answer });
      }
      localStorage.setItem("quizAnswers", JSON.stringify(state.answers));
    },
    resetAnswers: (state) => {
      state.answers = [];
      localStorage.removeItem("quizAnswers");
    },
  },
});

export const { addAnswer, resetAnswers } = quizSlice.actions;
export default quizSlice.reducer;
