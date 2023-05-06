import React from 'react';
import { Gender } from '@/types/gender';

type UserContextType = {
  age: number;
  setAge: (value: number) => void;
  gender: Gender;
  setGender: (value: Gender) => void;
  step: number;
  setStep: (value: number) => void;
};

const UserContext = React.createContext<UserContextType>({
  age: 20,
  setAge: () => {},
  gender: 'male',
  setGender: () => {},
  step: 0,
  setStep: () => {},
});

export default UserContext;
