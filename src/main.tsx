import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/styles.scss';
import Snippet from './components/snippet.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Snippet />
  </StrictMode>
);

