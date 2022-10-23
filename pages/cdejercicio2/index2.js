import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {} from "./cdejerercicio2/inicio1ejerc";

import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render( 
  <StrictMode>
    <App />
  </StrictMode>
);
