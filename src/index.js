import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterComponent from './components/FooterComponent';
import LandingPageComponent from './components/LandingPageComponent';
import VerificationComponent from './components/VerificationComponent';
import MyNavComponent from './components/MyNavComponent';
import { Divider } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <BrowserRouter>
      <MyNavComponent />
      <Divider className="pe-2" orientation="horizontal" flexItem>
      </Divider>
      <div>
        <Routes>
          <Route path="/" element={ <LandingPageComponent /> } ></Route>
          <Route path="/verify" element={ <VerificationComponent /> } ></Route>
          <Route path="/locked" element={ <VerificationComponent /> } ></Route>
          <Route path="/inactive" element={ <VerificationComponent /> } ></Route>
          <Route path="/home" element={ <VerificationComponent /> } ></Route>
        </Routes>
      </div>
      <FooterComponent />
    </BrowserRouter>
  </div>
);
