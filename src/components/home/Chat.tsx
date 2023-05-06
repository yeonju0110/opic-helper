import React, { useContext, useState } from 'react';
import styled from '@emotion/styled';
import { Input } from 'antd';
import axios from 'axios';
import { SyncOutlined } from '@ant-design/icons';
import { InputCard, SolidButton } from '../common';
import { MESSAGES } from '@/constants/contants';
import UserContext from '@/contexts/UserContext';
import { GptRequestData, GptResponseData } from '@/types/question-form';

const { TextArea } = Input;

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.8rem;
`;

const Column = styled.section`
  flex: 1;

  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledTextArea = styled(TextArea)`
  padding: 1rem 2rem;

  border: none;
  border-radius: 0 0 3rem 3rem;

  font-size: ${({ theme }) => theme.fontSize.fs16};
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 42rem;
`;

const StyledIcon = styled(SyncOutlined)`
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSize.fs30};
`;

export default function Chat() {
  const { age, gender } = useContext(UserContext);

  const [question, setQuestion] = useState<string>('');
  const [custom, setCustom] = useState<string | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [answer, setAnswer] = useState<string>('');

  const handleClick = () => {
    setLoading(true);
    const dto: GptRequestData = {
      age,
      gender,
      question,
      custom,
    };

    axios
      .post<GptResponseData>(`/api/gpt`, dto)
      .then((res) => {
        setAnswer(res.data.result);
      })
      .finally(() => setLoading(false));
  };

  return (
    <Container>
      <Column>
        <InputCard title={MESSAGES.CHAT_QUS}>
          <StyledTextArea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder={MESSAGES.GPT_QUS}
            autoSize={{ minRows: 7, maxRows: 7 }}
          />
        </InputCard>
        <InputCard title={MESSAGES.CHAT_CUSTOM}>
          <StyledTextArea
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder={MESSAGES.GPT_CUSTOM}
            autoSize={{ minRows: 5, maxRows: 5 }}
          />
        </InputCard>
        <SolidButton text={MESSAGES.BTN_SUBMIT} onClick={handleClick} />
      </Column>

      <Column>
        <InputCard title={MESSAGES.CHAT_ANS}>
          {loading ? (
            <LoadingWrapper>
              <StyledIcon spin />
            </LoadingWrapper>
          ) : (
            <StyledTextArea
              readOnly
              value={answer}
              autoSize={{ minRows: 16, maxRows: 16 }}
              placeholder={MESSAGES.GPT_ANS}
            />
          )}
        </InputCard>

        <Buttons>
          <SolidButton text={MESSAGES.BTN_EASY} />
          <SolidButton text={MESSAGES.BTN_HARD} />
          <SolidButton text={MESSAGES.BTN_COPY} />
        </Buttons>
      </Column>
    </Container>
  );
}
