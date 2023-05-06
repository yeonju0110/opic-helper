import React from 'react';
import styled from '@emotion/styled';
import { racing_sans_one } from '@/styles/fonts/fonts';
import { AliwangwangOutlined } from '@ant-design/icons';
import { MESSAGES } from '@/constants/contants';

const StyledHeader = styled.header`
  padding: 3rem 0;

  display: flex;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.white};
`;

const Title = styled.div`
  position: relative;

  font-size: ${({ theme }) => theme.fontSize.title};
  color: ${({ theme }) => theme.colors.primary}cc;
  text-align: center;
`;

const Icon = styled(AliwangwangOutlined)`
  position: absolute;
  left: calc(-${({ theme }) => theme.fontSize.title} - 1rem);
`;

export default function Header() {
  return (
    <StyledHeader className={racing_sans_one.className}>
      <Title>
        {MESSAGES.PROJECT_NAME}
        <Icon />
      </Title>
    </StyledHeader>
  );
}
