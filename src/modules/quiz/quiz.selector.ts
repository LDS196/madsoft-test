import {RootState} from "../../store/store.ts";

export const selectQuestions = (state: RootState) => state.quiz.questions;
export const selectQuestionNumber = (state: RootState) => state.quiz.questionNumber;
export const selectRestTime = (state: RootState) => state.quiz.restTime;
export const selectAnswers = (state: RootState) => state.quiz.answers;
