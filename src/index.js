import React from 'react';
import ReactDOM from 'react-dom/client';
import AudioPlayer from './components/AudioPlayer';
import './styles/index.css';
import './styles/progressBar.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AudioPlayer />
  </React.StrictMode>
)
