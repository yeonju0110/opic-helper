import type { AppProps } from 'next/app';
import 'antd/dist/reset.css';
import '@/styles/globals.css';
import theme from '@/styles/theme';
import { ThemeProvider } from '@emotion/react';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
