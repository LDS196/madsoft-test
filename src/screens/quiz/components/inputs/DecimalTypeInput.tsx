import { OutlinedTextFieldProps, TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {QuizFormFields} from "../../../../modules/quiz/forms/QuizForm.ts";
import {Question} from "../../../../modules/quiz/types/QuizTypes.ts";

interface INumberTypeInputProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  question: Question;
}

export const DecimalTypeInput: React.FC<INumberTypeInputProps> = (props) => {
  const { disabled, ...rest } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={QuizFormFields.decimal_answer}
      control={control}
      render={({ field, fieldState }) => {
        const errorMessage = fieldState.error?.message;

        return (
          <TextField
            type={'number'}
            inputRef={field.ref}
            fullWidth
            variant="outlined"
            size="small"
            sx={{
              maxWidth: 300,
            }}
            placeholder={'Ваш ответ'}
            {...rest}
            {...field}
            ref={null}
            value={field.value}
            error={!!errorMessage || props.error}
            helperText={errorMessage || props.helperText}
            disabled={disabled}
          />
        );
      }}
    />
  );
};
