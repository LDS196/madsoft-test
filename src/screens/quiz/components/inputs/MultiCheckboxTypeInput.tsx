import { Checkbox, FormControl, FormControlLabel, FormLabel } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {QuizFormFields} from "../../../../modules/quiz/forms/QuizForm.ts";
import {Question} from "../../../../modules/quiz/types/QuizTypes.ts";

interface IMultiCheckboxTypeInputProps {
  question: Question;
}

export const MultiCheckboxTypeInput: React.FC<IMultiCheckboxTypeInputProps> = ({ question }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[QuizFormFields.multi_answer]?.message;

  const handleSelect = (checked: boolean, option: string, values: string[]) => {
    return checked ? [...values, option] : values.filter((v) => v !== option);
  };

  return (
    <FormControl size="small" variant="outlined" error={!!errorMessage}>
      <FormLabel component="legend">{'Выберите несколько вариантов'}</FormLabel>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {question.answerOptions!.map((option) => (
          <Controller
            key={option}
            name={QuizFormFields.multi_answer}
            control={control}
            render={({ field }) => (
              <FormControlLabel
                label={option.toUpperCase()}
                control={
                  <Checkbox
                    checked={field.value.includes(option)}
                    onChange={(e) => {
                      field.onChange(handleSelect(e.target.checked, option, field.value));
                    }}
                  />
                }
              />
            )}
          />
        ))}
      </div>
    </FormControl>
  );
};
