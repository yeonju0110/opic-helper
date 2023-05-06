import { GENERATOR } from '@/constants/contants';
import { Gender } from '@/types/gender';

export const processQuestion = (
  age: number,
  gender: Gender,
  question: string,
  custom?: string
): string => {
  const me: string = GENERATOR.getMe(age, gender);
  const command: string = GENERATOR.COMMAND;
  const customCommand: string = GENERATOR.CUSTOM_COMMAND;
  const options: string = GENERATOR.OPTIONS;

  if (custom) {
    return me + command + question + customCommand + custom + options;
  }
  return me + command + question + options;
};
