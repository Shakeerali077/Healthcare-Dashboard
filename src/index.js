import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




import ReactGA from 'react-ga4'; // Import react-ga4

// Replace 'G-YOUR_MEASUREMENT_ID' with your actual Measurement ID
const GA_MEASUREMENT_ID = 'G-C6T6TNDV0P';
ReactGA.initialize(GA_MEASUREMENT_ID);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
