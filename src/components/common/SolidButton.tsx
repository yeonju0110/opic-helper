import styled from '@emotion/styled';
import { Button, ButtonProps } from 'antd';
import React from 'react';

const CustomButton = styled(Button)`
  margin: 1rem 0;
  padding: 0.2rem 2rem;

  background-color: ${({ theme }) => theme.colors.primary}cc;
  height: auto;

  border: 0.1rem solid ${({ theme }) => theme.colors.black};
  border-radius: 3rem;

  font-size: ${({ theme }) => theme.fontSize.fs24};
`;

interface SolidButtonProps extends ButtonProps {
  text: string;
}

export default function SolidButton({ text, ...props }: SolidButtonProps) {
  return (
    <CustomButton {...props} type="primary">
      {text}
    </CustomButton>
  );
}
