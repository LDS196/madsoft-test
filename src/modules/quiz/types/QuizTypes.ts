export enum QuizOptionsValueTypeEnum {
  single_answer = 'single_answer', // один ответ можно выбрать
  boolean_answer = 'boolean_answer', // булевый
  multi_answer = 'multi_answer', // много ответов можно выбрать
  single_string_answer = 'single_string_answer', // короткий ответ
  multi_string_answer = 'multi_string_answer', // многострочный ответ
  decimal_answer = 'decimal_answer', // многострочный ответ
}

type QuestionType =
  | 'single_answer'
  | 'boolean_answer'
  | 'multi_answer'
  | 'single_string_answer'
  | 'multi_string_answer'
  | 'decimal_answer';

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  answerOptions?: string[];
}

export interface Answer {
  question: Question;
  answer: string | boolean | string[];
}
