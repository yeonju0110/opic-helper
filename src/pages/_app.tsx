import type { AppProps } from 'next/app';
import 'antd/dist/reset.css';
import '@/styles/globals.css';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';
import UserProvider from '@/components/common/UserProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </UserProvider>
  );
}
