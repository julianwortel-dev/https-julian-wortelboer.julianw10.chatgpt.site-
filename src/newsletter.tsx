import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import NewsletterPage from './NewsletterPage';
import './style.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode><NewsletterPage /></StrictMode>,
);
