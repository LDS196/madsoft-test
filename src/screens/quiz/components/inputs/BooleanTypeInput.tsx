import { Box, Button, ButtonProps, FormLabel, Grid, FormControl } from '@mui/material';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import {QuizFormFields} from "../../../../modules/quiz/forms/QuizForm.ts";
import {Question} from "../../../../modules/quiz/types/QuizTypes.ts";


interface IBooleanTypeInputProps extends ButtonProps {
  question: Question;
}

export const BooleanTypeInput: React.FC<IBooleanTypeInputProps> = (props) => {
  const { sx, ...rest } = props;

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[QuizFormFields.boolean_answer]?.message;

  // Renders

  return (
    <FormControl size="small" variant="outlined" error={!!errorMessage}>
      <FormLabel component="legend">{'Выберите ответ'}</FormLabel>
      <Controller
        name={QuizFormFields.boolean_answer}
        control={control}
        render={({ field }) => (
          <Box width="100%" mt={1}>
            <Grid container spacing={2}>
              <Grid item xs md="auto">
                <Button
                  {...rest}
                  fullWidth
                  sx={{ minWidth: { xs: 100, md: 200 }, ...sx }}
                  variant={field.value === true ? 'contained' : 'outlined'}
                  onClick={() => field.onChange(true)}
                >
                  Да
                </Button>
              </Grid>

              <Grid item xs md="auto">
                <Button
                  {...rest}
                  fullWidth
                  sx={{ minWidth: { xs: 100, md: 200 }, ...sx }}
                  variant={field.value === false ? 'contained' : 'outlined'}
                  onClick={() => field.onChange(false)}
                >
                  Нет{' '}
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      />
    </FormControl>
  );
};
