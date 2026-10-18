import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';

const Index: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App/>
    </ThemeProvider>
  )
}

ReactDOM.render(<Index/>, document.getElementById('root'));
