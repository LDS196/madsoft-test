import { OutlinedTextFieldProps, TextField } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import {QuizFormFields} from "../../../../modules/quiz/forms/QuizForm.ts";
import {Question} from "../../../../modules/quiz/types/QuizTypes.ts";

interface IStringTypeInputProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  question: Question;
}

export const StringTypeInput: React.FC<IStringTypeInputProps> = (props) => {
  const { disabled, ...rest } = props;

  const { control } = useFormContext();

  return (
    <Controller
      name={QuizFormFields.single_string_answer}
      control={control}
      render={({ field, fieldState }) => {
        const errorMessage = fieldState.error?.message;

        return (
          <TextField
            inputRef={field.ref}
            variant="outlined"
            fullWidth
            size="small"
            sx={{
              maxWidth: 500,
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
