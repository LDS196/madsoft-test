import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {QuizFormFields} from "../../../../modules/quiz/forms/QuizForm.ts";
import {Question} from "../../../../modules/quiz/types/QuizTypes.ts";

interface IRadioTypeInputProps {
  question: Question;
}

export const RadioTypeInput: React.FC<IRadioTypeInputProps> = ({ question }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[QuizFormFields.single_answer]?.message;
  return (
    <FormControl size="small" variant="outlined" error={!!errorMessage}>
      <FormLabel component="legend">{'Выберите один вариант'}</FormLabel>
      <Controller
        name={QuizFormFields.single_answer}
        control={control}
        render={({ field }) => (
          <RadioGroup value={field.value} onChange={field.onChange}>
            {question.answerOptions!.map((option) => (
              <FormControlLabel key={option} value={option} control={<Radio />} label={option.toUpperCase()} />
            ))}
          </RadioGroup>
        )}
      />
    </FormControl>
  );
};

export default RadioTypeInput;
