import * as React from "react";
import { createTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeroSection from '../components/HeroSection.jsx';
import Header from '../components/Header.jsx';
import Projects from '../components/Projects.jsx';

let darkTheme = createTheme({
  palette: {
    type: 'dark',
  },
});

darkTheme = responsiveFontSizes(darkTheme);

const IndexPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header />
      <HeroSection />
      <Projects />
    </ThemeProvider>
  );
}

export default IndexPage
