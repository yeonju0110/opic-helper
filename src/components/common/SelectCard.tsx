import React, { PropsWithChildren } from 'react';
import styled from '@emotion/styled';
import { useTheme } from '@emotion/react';

const Container = styled.div`
  border: 0.1rem solid ${({ theme }) => theme.colors.black};
  border-radius: 3rem;
`;

const StatusBar = styled.section`
  padding: 1.4rem 2.4rem;

  display: flex;
  gap: 0.6rem;
  border-radius: 3rem 3rem 0 0;

  background-color: ${({ theme }) => theme.colors.primary}cc;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.black};
`;

const Dot = styled.div<{ color: string }>`
  background-color: ${({ color }) => color};
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
`;

const Main = styled.section`
  padding: 5rem 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  background-color: ${({ theme }) => theme.colors.white}cc;
  border-radius: 0 0 3rem 3rem;
`;

const Title = styled.p`
  font-size: ${({ theme }) => theme.fontSize.fs26};
  color: ${({ theme }) => theme.colors.primary}cc;
`;

export interface SelectCardProps extends PropsWithChildren {
  title: string;
}

export default function SelectCard({ title, children }: SelectCardProps) {
  const theme = useTheme();
  return (
    <Container>
      <StatusBar>
        <Dot color={theme.colors.red} />
        <Dot color={theme.colors.gold} />
        <Dot color={theme.colors.lime} />
      </StatusBar>
      <Main>
        <Title>{title}</Title>
        {children}
      </Main>
    </Container>
  );
}
