import styled from '@emotion/styled';
import React, { useContext } from 'react';
import UserContext from '@/contexts/UserContext';
import Survey from './Survey';
import Chat from './Chat';

const Container = styled.div`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};

  position: relative;
`;

const Wrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate3d(-50%, -30%, 0);

  display: flex;
  flex-direction: column;

  width: max-content;
  align-items: center;
  gap: 2.8rem;
  margin: 0 auto;
`;

export default function Main() {
  const { step } = useContext(UserContext);

  return (
    <Container>
      <Wrapper>{step === 0 ? <Survey /> : <Chat />}</Wrapper>
    </Container>
  );
}
