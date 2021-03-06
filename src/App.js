import React from 'react';
import './App.css';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import Navbar from './components/Navbar'
import Footer from './components/footer'
import { mergeClasses } from '@material-ui/styles';
const theme = createTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
    typography: {
      fontFamily: [
        'Roboto'
      ],
      h4: {
        fontWeight: 600,
        fontSize: 28,
        lineHeight: '2rem',
      },
      h5: {
        fontWeight: 100,
        lineHeight: '2rem',
      },
    },
  },
});
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <div classname={mergeClasses.bigSpace}>
          <Footer />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;