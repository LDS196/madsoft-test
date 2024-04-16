import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import React from 'react';
import {Question} from "../../modules/quiz/types/QuizTypes.ts";


type HorizontalStepperProps = {
  activeStep: number;
  steps: Question[];
  endStep: number;
};

export const HorizontalStepper: React.FC<HorizontalStepperProps> = ({ activeStep, steps, endStep }) => {
  const activeStepIndex = steps.length === endStep ? activeStep + 1 : activeStep;

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper activeStep={activeStepIndex} alternativeLabel>
        {steps.map((step) => (
          <Step key={step.id}>
            <StepLabel></StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
