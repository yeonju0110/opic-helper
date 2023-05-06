import React, { PropsWithChildren, useMemo, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import { Gender } from '@/types/gender';

export default function UserProvider({ children }: PropsWithChildren) {
  const [age, setAge] = useState<number>(20);
  const [gender, setGender] = useState<Gender>('male');
  const [step, setStep] = useState<number>(0);

  const updateAge = (value: number) => {
    return setAge(value);
  };

  const updateGender = (value: Gender) => {
    return setGender(value);
  };

  const updateStep = (value: number) => {
    return setStep(value);
  };

  const value = useMemo(() => {
    return {
      age,
      setAge: updateAge,
      gender,
      setGender: updateGender,
      step,
      setStep: updateStep,
    };
  }, [age, gender, step]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
