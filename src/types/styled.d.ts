import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      background: string;
      primary: string;
      second: string;
      lime: string;
      gold: string;
      red: string;
      white: string;
      black: string;
    };

    fontSize: {
      title: string;
      fs30: string;
      fs26: string;
      fs24: string;
      fs20: string;
      fs16: string;
    };
  }
}
