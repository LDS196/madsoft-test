import {yupResolver} from '@hookform/resolvers/yup';
import {Box, Button, Stack, Typography} from '@mui/material';
import {FormProvider, useForm} from 'react-hook-form';
import {useSelector} from 'react-redux';
import {
  selectAnswers,
  selectQuestionNumber,
  selectQuestions,
  selectRestTime
} from "../../modules/quiz/quiz.selector.ts";
import {quizActions, TIME_FOR_TEST} from "../../modules/quiz/quiz.slice.ts";
import {useActions} from "../../common/hooks/useActions.ts";
import {formatTime} from "../../common/utils/formatTime.ts";
import {QuizForm} from "../../modules/quiz/forms/QuizForm.ts";
import {QuizFormValidationSchema} from "../../modules/quiz/schemas/QuizFormValidation.ts";
import CountdownTimer from "../../common/components/CountdownTimer.tsx";
import {HorizontalStepper} from "../../common/components/HorizontalStepper.tsx";
import {OptionsFormInputs} from "./components/OptionsFormInputs.tsx";
import {ConfirmModal} from "../../common/components/ConfirmModal.tsx";


const QuizScreen = () => {
  const {changeQuestionNumber, setAnswer, resetState, setRestTime} = useActions(quizActions);
  const questions = useSelector(selectQuestions);
  const questionNumber = useSelector(selectQuestionNumber);
  const answers = useSelector(selectAnswers);
  const restTime = useSelector(selectRestTime);

  const isStopTest = answers.length === questions.length || restTime === 0;
  const spentTime = formatTime(TIME_FOR_TEST - restTime!);
  const titleForModalEnd = `Тест завершен! Вы ответили на ${answers.length} вопросов за ${spentTime}. Хотите повторить?`;

  const methods = useForm<QuizForm>({
    mode: 'onSubmit',
    defaultValues: {...QuizForm.create()},
    resolver: yupResolver(QuizFormValidationSchema(questions[questionNumber].type)),
  });

  const {handleSubmit, reset} = methods;

  const handleStartTestAgain = () => {
    resetState();
    setRestTime(TIME_FOR_TEST);
    reset(QuizForm.create());
  };

  const handleFinishTest = () => {
    resetState();
    reset(QuizForm.create());
  };

  const handleCloseModalStart = () => {
    setRestTime(TIME_FOR_TEST);
  };

  const handleSubmitForm = (data: QuizForm) => {
    setAnswer({
      question: questions[questionNumber],
      answer: data[questions[questionNumber].type]!,
    });

    if (questionNumber < questions.length - 1) {
      changeQuestionNumber(questionNumber + 1);
    }
  };

  return (
    <Stack direction="column" spacing={3}>
      <Box display={'flex'} gap={1} flexWrap={'wrap'} justifyContent={'space-between'} alignItems={'center'}>
        <Typography variant="h5">Тестирование</Typography>
        <CountdownTimer stopTimer={isStopTest}/>
      </Box>
      <HorizontalStepper steps={questions} activeStep={questionNumber} endStep={answers.length}/>

      <Typography variant="h5">Вопрос: {questions[questionNumber].question}</Typography>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <OptionsFormInputs question={questions[questionNumber]}/>
          <Box mt={3}>
            <Button variant="contained" type="submit">
              Ответить
            </Button>
          </Box>
        </form>
      </FormProvider>

      <ConfirmModal
        desc={'Начать тестирование?'}
        open={restTime === null}
        onAgree={handleCloseModalStart}
        onDisagree={() => {
        }}
      />

      <ConfirmModal
        desc={titleForModalEnd}
        open={isStopTest}
        onAgree={handleStartTestAgain}
        onDisagree={handleFinishTest}
      />
    </Stack>
  );
};

export default QuizScreen;
