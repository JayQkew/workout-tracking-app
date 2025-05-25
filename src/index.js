import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { WorkoutProvider } from './Contexts/WorkoutContext';
import { TrackingProvider } from './Contexts/TrackingContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <WorkoutProvider>
      <TrackingProvider>
        <App />
      </TrackingProvider>
    </WorkoutProvider>
  </React.StrictMode>
);
