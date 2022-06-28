import React from 'react';
import App from './App';
import './style.css';

/* render */

import { createRoot } from 'react-dom/client';
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
