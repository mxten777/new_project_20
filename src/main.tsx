import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App_Premium from './App_Premium';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App_Premium />
  </StrictMode>,
)