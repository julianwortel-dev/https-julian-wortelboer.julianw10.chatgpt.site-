import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import CoachingPage from './CoachingPage';
import './style.css';

createRoot(document.getElementById('root')!).render(<StrictMode><CoachingPage /></StrictMode>);
