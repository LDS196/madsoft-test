import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { data } from './data/data';
import { Answer, Question } from './types/QuizTypes';

export const TIME_FOR_TEST = 60; // seconds

interface QuizState {
  questions: Question[];
  questionNumber: number;
  answers: Answer[];
  restTime: number | null;
}

const initialState: QuizState = {
  questions: data,
  questionNumber: 0,
  answers: [],
  restTime: null,
};

export const slice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    changeQuestionNumber: (state: QuizState, action: PayloadAction<number>) => {
      state.questionNumber = action.payload;
    },
    setAnswer: (state: QuizState, action: PayloadAction<Answer>) => {
      state.answers.push(action.payload);
    },
    setRestTime: (state: QuizState, action: PayloadAction<number>) => {
      state.restTime = action.payload;
    },
    resetState: (state) => {
      state.restTime = null;
      state.questionNumber = 0;
      state.answers = [];
    },
  },
});

export const quizActions = slice.actions;
export const quizReducer = slice.reducer;
export const quizThunks = {};
