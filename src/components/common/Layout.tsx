import styled from '@emotion/styled';
import React, { PropsWithChildren } from 'react';

const PageContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
`;

export default function Layout({ children }: PropsWithChildren) {
  return <PageContainer>{children}</PageContainer>;
}
