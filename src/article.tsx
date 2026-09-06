import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ArticlePage from './ArticlePage';
import './style.css';

createRoot(document.getElementById('root')!).render(<StrictMode><ArticlePage /></StrictMode>);
