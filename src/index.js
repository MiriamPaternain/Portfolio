import React from 'react';
import { createRoot } from 'react-dom';
import App from './components/App';

import { HashRouter } from 'react-router-dom';

const root = createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <App />
  </HashRouter>
);
