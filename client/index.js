import React from 'react';
// import { render } from 'react-dom';    React 17
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// React 17
// render(
//   <App />,
//   document.querySelector('#root')
// );

const root = createRoot(document.getElementById('root'));
root.render(<App />);