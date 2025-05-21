
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Import all the style files
import './styles/logo-animation.css';
import './styles/character-animations.css';
import './styles/character-hover-effects.css';
import './styles/glow-effects.css';
import './styles/background-effects.css';
import './styles/orbital-animations.css';
import './styles/tarot-animations.css';
import './styles/service-animations.css';
import './styles/animation-effects.css'; // Add the new animation effects

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
