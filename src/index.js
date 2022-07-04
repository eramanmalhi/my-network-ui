import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './components/FooterComponent';
import LandingPageComponent from './components/LandingPageComponent';
import MyNavComponent from './components/MyNavComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyNavComponent />
    <LandingPageComponent />
    <FooterComponent />
  </React.StrictMode>
);
