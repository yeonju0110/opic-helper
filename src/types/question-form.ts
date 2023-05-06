export type GptRequestData = {
  age: number;
  gender: 'male' | 'female';
  question: string;
  custom?: string;
};

export type GptResponseData = {
  result: string;
};
