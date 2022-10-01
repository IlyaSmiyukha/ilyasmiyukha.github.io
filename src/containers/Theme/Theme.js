import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  dark: {
    colors: {
      background: '#0d0d0d',
      text: '#fff'
    }
  },
  light: {
    colors: {
      background: '#e6e6e6',
      text: '#0d0d0d'
    }
  }
};

const Theme = ({ children, type }) => (
  <ThemeProvider theme={theme[type]}>{children}</ThemeProvider>
);

export default Theme
