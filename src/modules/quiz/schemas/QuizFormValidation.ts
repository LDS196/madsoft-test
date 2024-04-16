import * as yup from 'yup';

import { QuizFormFields } from '../forms/QuizForm';

export const QuizFormValidationSchema = (typeQuestion: keyof typeof QuizFormFields): any => {
  const validation = {
    [QuizFormFields.single_answer]: yup.string().required('Обязательное поле'),
    [QuizFormFields.boolean_answer]: yup.boolean().required('Обязательное поле'),
    [QuizFormFields.multi_answer]: yup.array().min(1).of(yup.string()).required('Обязательное поле'),
    [QuizFormFields.single_string_answer]: yup.string().required('Обязательное поле').max(20),
    [QuizFormFields.multi_string_answer]: yup.string().required('Обязательное поле').max(1000),
    [QuizFormFields.decimal_answer]: yup.string().required('Обязательное поле'),
  };

  return yup.object().shape({
    [typeQuestion]: validation[typeQuestion],
  });
};
