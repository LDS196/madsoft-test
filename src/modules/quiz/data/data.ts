import {Question} from "../types/QuizTypes.ts";

export const data: Question[] = [
  {
    id: 1,
    type: 'single_answer',
    question: 'Что должен знать Фронтенд разработчик?',
    answerOptions: ['java', 'css', 'matan', 'english'],
  },
  {
    id: 3,
    type: 'multi_answer',
    question: 'Что должен знать Фронтенд разработчик?',
    answerOptions: ['js', 'css', 'html', 'c++'],
  },
  {
    id: 2,
    type: 'boolean_answer',
    question: '2 + 2 = 4',
  },
  {
    id: 6,
    type: 'decimal_answer',
    question: '236 + 22 = ?',
  },

  {
    id: 4,
    type: 'single_string_answer',
    question: 'за + мок',
  },
  {
    id: 5,
    type: 'multi_string_answer',
    question: 'Напишите о Ваших проектах',
  },
];
