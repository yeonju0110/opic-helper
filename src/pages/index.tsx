import Head from 'next/head';
import { variableFont } from '@/styles/fonts/fonts';
import { Footer, Header, Layout } from '@/components/common';
import { Main } from '@/components/home';
import { MESSAGES } from '@/constants/contants';

export default function Home() {
  return (
    <>
      <Head>
        <title>{MESSAGES.PROJECT_NAME}</title>
        <meta name="description" content={MESSAGES.PROJECT_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={variableFont.className}>
        <Layout>
          <Header />
          <Main />
          <Footer />
        </Layout>
      </main>
    </>
  );
}
