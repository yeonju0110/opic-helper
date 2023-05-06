import React from 'react';
import styled from '@emotion/styled';
import { MESSAGES } from '@/constants/contants';

const StyledFooter = styled.footer`
  padding: 2rem 0;
  background-color: ${({ theme }) => theme.colors.background};

  color: ${({ theme }) => theme.colors.primary}cc;
  font-size: ${({ theme }) => theme.fontSize.fs16};
  text-align: center;
`;

export default function Footer() {
  return <StyledFooter>{MESSAGES.ACCOUNT}</StyledFooter>;
}
