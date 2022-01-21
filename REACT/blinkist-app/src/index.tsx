import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from '@mui/material/styles'; 

const theme= createTheme({
  palette:{
    primary:{
      main: '#22C870',
    },
    secondary:{
      main: '#0365F2',
    },
    info:{
      main:'#E1ECFC'
    },
    text:{
      primary:'#03314B',
    },
    
},
typography:{
  fontFamily:/* "Cera Pro" */'Raleway',
  fontWeightLight: 400,
  fontWeightRegular: 500,
  fontWeightMedium: 600,
  fontWeightBold: 700, 
  h1:{
    fontWeight:'fontWeightBold',
    fontSize:'36px',
    lineHeight:'45px',
  },
  subtitle1:{
    fontWeight:'fontWeightRegular',
    fontSize:'18px',
    lineHeight:'32px',
  },
  subtitle2:{
    fontWeight:'fontWeightBold',
    fontSize:'18px',
    lineHeight:'24px',
  },
  body1:{
    fontWeight:'fontWeightBold',
    fontSize:'16px',
    lineHeight:'24px',
  },
  body2:{
    fontWeight:'fontWeightLight',
    fontSize:'16px',
    lineHeight:'24px',
  },
  caption:{
    fontWeight:'fontWeightLight',
    fontSize:'14px',
    lineHeight:'22px',
  },
  button:{
    color:'#0365F2',
    textTransform:'none'
  }
}
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
