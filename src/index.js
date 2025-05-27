import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { WorkoutProvider } from './Contexts/WorkoutContext';
import { StatsProvider } from './Contexts/StatsContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutProvider>
      <StatsProvider>
        <App />
      </StatsProvider>
    </WorkoutProvider>
  </React.StrictMode>
);
