import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App.js';

ReactDOM.hydrate(<App topTimes={window.__INITIAL__DATA__.topTimes}/>, document.getElementById('minesweeper-root'));
