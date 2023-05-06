import React, { CSSProperties, useContext } from 'react';
import { InputNumber } from 'antd';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';
import { InputCard, SelectCard, SolidButton } from '../common';
import { MESSAGES } from '@/constants/contants';
import UserContext from '@/contexts/UserContext';

const Row = styled.div`
  width: 100%;

  display: flex;
  gap: 2.8rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  padding: 3rem;
  background-color: ${({ theme }) => theme.colors.white}cc;
  border-radius: 0 0 3rem 3rem;
`;

const SurveyInfo = styled.p`
  margin-bottom: 0;

  font-size: ${({ theme }) => theme.fontSize.fs20};
  color: ${({ theme }) => theme.colors.primary}cc;
`;

const SurveyOption = styled.p`
  margin-bottom: 0;

  font-size: ${({ theme }) => theme.fontSize.fs16};
  color: ${({ theme }) => theme.colors.black};
`;

const Radio = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.4rem;
`;

export default function Survey() {
  const theme = useTheme();

  const { age, gender, setAge, setGender, step, setStep } =
    useContext(UserContext);

  const inputCss: CSSProperties = {
    border: `0.1rem solid ${theme.colors.black}`,
    borderRadius: '3rem',
    padding: '0.6rem 2rem',
  };

  return (
    <>
      <Row>
        <SelectCard title={MESSAGES.AGE}>
          <InputNumber
            style={inputCss}
            min={1}
            max={100}
            value={age}
            onChange={(e) => setAge(e ?? 20)}
          />
        </SelectCard>

        <SelectCard title={MESSAGES.GENDER}>
          <Radio>
            <SolidButton
              text="🙋🏻‍♂️"
              style={{
                backgroundColor:
                  gender === 'male'
                    ? `${theme.colors.second}`
                    : `${theme.colors.white}`,
              }}
              onClick={() => setGender('male')}
            />
            <SolidButton
              text="🙋🏻‍♀️"
              style={{
                backgroundColor:
                  gender === 'female'
                    ? `${theme.colors.second}`
                    : `${theme.colors.white}`,
              }}
              onClick={() => setGender('female')}
            />
          </Radio>
        </SelectCard>
      </Row>

      <Row>
        <InputCard title={MESSAGES.SURVEY_TITLE}>
          <Container>
            <SurveyInfo>{MESSAGES.SURVEY_INFO}</SurveyInfo>
            <SurveyOption>{MESSAGES.SURVEY_OPTION}</SurveyOption>
          </Container>
        </InputCard>
      </Row>
      <SolidButton text={MESSAGES.BTN_START} onClick={() => setStep(1)} />
    </>
  );
}
