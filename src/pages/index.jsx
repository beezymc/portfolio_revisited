import * as React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import HeroSection from '../components/HeroSection.jsx';
import Header from '../components/Header.jsx';
import Projects from '../components/Projects.jsx';
import About from '../components/About.jsx';
import Footer from '../components/Footer.jsx';
import { responsiveFontSizes } from '@material-ui/core/styles';
import { StyledEngineProvider, createTheme, adaptV4Theme, ThemeProvider } from '@mui/material/styles';


let darkTheme = createTheme(adaptV4Theme({
  palette: {
    type: 'dark'
  },
}));

darkTheme = responsiveFontSizes(darkTheme);

const IndexPage = () => {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Header />
        <HeroSection />
        <About />
        <Projects />
        <Footer />
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default IndexPage