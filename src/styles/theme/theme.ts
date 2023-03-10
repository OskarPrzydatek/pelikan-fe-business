import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    red: '#F23557',
    lightBlue: '#98BFF2',
    darkBlue: '#013059',
    gray: '#2E4559',
    black: '#21313F',
    white: '#FFFFFF',
  },
  breakpoints: {
    phone: '(min-width: 390px)',
    tablet: '(min-width: 834px)',
    desktop: '(min-width: 1728px)',
  },
  fonts: {
    main: `'Nanum Gothic', sans-serif`,
  },
  fontSizes: {
    xxs: '.6rem',
    xs: '.8rem',
    s: '1rem',
    m: '1.4rem',
    l: '1.8rem',
    xl: '2rem',
    xxl: '3.5rem',
  },
  spaces: {
    xs: '.5%',
    s: '.7%',
    m: '1%',
    l: '2%',
    xl: '2.5%',
    xxl: '5%',
  },
};
