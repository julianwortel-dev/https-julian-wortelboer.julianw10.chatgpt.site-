import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import InsightsPage from './InsightsPage';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <InsightsPage />
  </StrictMode>,
);
