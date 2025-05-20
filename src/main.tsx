
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import all the new style files
import './styles/logo-animation.css';
import './styles/character-animations.css';
import './styles/character-hover-effects.css';
import './styles/glow-effects.css';
import './styles/background-effects.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
