import React from 'react';
import { render } from 'react-dom';
import App from './App.jsx';

const root = ReactDOM.createRoot(
  document.querySelector('#root')
);

root.render(<App />);