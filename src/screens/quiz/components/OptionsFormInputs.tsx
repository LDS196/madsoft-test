import {BooleanTypeInput} from './inputs/BooleanTypeInput';
import {DecimalTypeInput} from './inputs/DecimalTypeInput';
import {MultiCheckboxTypeInput} from './inputs/MultiCheckboxTypeInput';
import RadioTypeInput from './inputs/RadioTypeInput';
import {StringTypeInput} from './inputs/StringTypeInput';
import {Question, QuizOptionsValueTypeEnum} from "../../../modules/quiz/types/QuizTypes.ts";
import {FC, useMemo} from "react";
import {MultiStringTypeInput} from "./inputs/MultiStringTypeInput.tsx";

interface IOptionsFormInputsProps {
  question: Question;
}

export const OptionsFormInputs: FC<IOptionsFormInputsProps> = ({question}) => {
  const inputs = useMemo(
    () => ({
      [QuizOptionsValueTypeEnum.single_answer]: <RadioTypeInput question={question}/>,
      [QuizOptionsValueTypeEnum.boolean_answer]: <BooleanTypeInput question={question}/>,
      [QuizOptionsValueTypeEnum.multi_answer]: <MultiCheckboxTypeInput question={question}/>,
      [QuizOptionsValueTypeEnum.single_string_answer]: <StringTypeInput question={question}/>,
      [QuizOptionsValueTypeEnum.multi_string_answer]: <MultiStringTypeInput question={question}/>,
      [QuizOptionsValueTypeEnum.decimal_answer]: <DecimalTypeInput question={question}/>,
    }),
    [question],
  );

  if (!question) {
    return null;
  }

  return inputs[question.type];
};
