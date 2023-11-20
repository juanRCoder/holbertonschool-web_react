import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Notifications from './Notifications';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Notifications />
    <App />
  </React.StrictMode>
);

reportWebVitals();
