import type { AppProps } from 'next/app';
import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';

import GlobalStyles from 'styles/globalStyles';
import { lightTheme, darkTheme } from 'styles/theme';

import '../styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, ] = useState('light');

  // const toggleTheme = () => {
  //   theme == 'light' ? setTheme('dark') : setTheme('light');
  // };

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Component {...pageProps} />
      <h1>Generated from: http://www.cufonfonts.com</h1><br/>
      {/* <h1 style={{fontFamily:'Saira Regular', fontWeight:'normal', fontSize: '42px'}}>AaBbCcDdEeFfGgHhŞşIıİi Example</h1> */}
      {/* <h1 style={{fontFamily:'Saira Stencil One', fontWeight:"normal", fontSize: "42px"}}>AaBbCcDdEeFfGgHhŞşIıİi Example</h1> */}
    </ThemeProvider>
  );

}

export default MyApp;
