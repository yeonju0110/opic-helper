import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

const Container = styled.div`
  width: 100%;
  border: 0.1rem solid ${({ theme }) => theme.colors.black};
  border-radius: 3rem;

  overflow: hidden;
`;

const StatusBar = styled.section`
  padding: 1.4rem 7.2rem 1.4rem 2.4rem;

  display: flex;
  gap: 0.6rem;

  background-color: ${({ theme }) => theme.colors.primary}cc;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
  border-radius: 3rem 3rem 0 0;
`;

const Dot = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
`;

const Main = styled.section`
  background-color: ${({ theme }) => theme.colors.white}cc;
  border-radius: 0 0 3rem 3rem;
`;

const Title = styled.p`
  flex: 1;

  margin-bottom: 0;
  padding: 0 1rem;

  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.fs20};
  line-height: ${({ theme }) => theme.fontSize.fs20};
  text-align: center;
`;

export interface InputCardProps extends PropsWithChildren {
  title: string;
}

export default function InputCard({ title, children }: InputCardProps) {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar>
        <Dot color={theme.colors.red} />
        <Dot color={theme.colors.gold} />
        <Dot color={theme.colors.lime} />
        <Title>{title}</Title>
      </StatusBar>
      <Main>{children}</Main>
    </Container>
  );
}
