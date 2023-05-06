import { Racing_Sans_One } from 'next/font/google';
import localFont from 'next/font/local';

export const variableFont = localFont({
  src: '../../../public/fonts/PretendardVariable.woff2',
});

export const racing_sans_one = Racing_Sans_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});
