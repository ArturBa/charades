import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
    };
  }
}

export const defaultTheme: DefaultTheme = {
  colors: {
    black: '#4F4F4F',
  },
};
