import {BaseForm} from "../../../common/BaseForm.ts";

export enum QuizFormFields {
  single_answer = 'single_answer', // один ответ можно выбрать
  boolean_answer = 'boolean_answer', // булевый
  multi_answer = 'multi_answer', // много ответов можно выбрать
  single_string_answer = 'single_string_answer', // однострочный ответ
  multi_string_answer = 'multi_string_answer', //// многострочный ответ
  decimal_answer = 'decimal_answer', //// многострочный ответ
}

export class QuizForm extends BaseForm {
  single_answer: string = '';
  boolean_answer: boolean | null = null;
  multi_answer: string[] = [];
  single_string_answer: string = '';
  multi_string_answer: string = '';
  decimal_answer: string = '';

  constructor(props?: unknown) {
    super(props);
    this.load(props);
  }
}
