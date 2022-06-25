import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
// import { render } from 'react-dom';    React 17

// React 17
// render(
//   <App />,
//   document.querySelector('#root')
// );

// React 18
const root = createRoot(document.getElementById('root'));
root.render(<App />);