import {Typography} from '@mui/material';
import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';


import {useActions} from '../hooks/useActions';
import {quizActions} from "../../modules/quiz/quiz.slice.ts";
import {selectRestTime} from "../../modules/quiz/quiz.selector.ts";
import {formatTime} from "../utils/formatTime.ts";

type CountdownTimerProps = {
  stopTimer: boolean;
};

const CountdownTimer: React.FC<CountdownTimerProps> = ({stopTimer}) => {
  const {setRestTime} = useActions(quizActions);

  const seconds = useSelector(selectRestTime);

  useEffect(() => {
    if (stopTimer || !seconds) {
      return;
    }

    const intervalId = setInterval(() => {
      setRestTime(seconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [seconds, stopTimer]);

  return <Typography variant={'h6'}>Остаток времени: {formatTime(seconds)}</Typography>;
};

export default CountdownTimer;
