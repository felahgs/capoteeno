
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/globalStyles';
import { lightTheme } from '../styles/theme';

import '../styles/fonts.css';

addDecorator((storyFn) => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}