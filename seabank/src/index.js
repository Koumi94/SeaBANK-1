import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';


//IMPORT CSS
// import "../src/assets/css/aos.css";
import '../src/assets/css/style.css';

import "../src/assets/css/bootstrap.min.css";
import "../src/assets/css/jquery-ui.css";
import "../src/assets/css/owl.carousel.min.css";
import "../src/assets/css/owl.theme.default.min.css";
import "../src/assets/css/owl.theme.default.min.css";

import "../src/assets/css/jquery.fancybox.min.css";

import "../src/assets/css/bootstrap-datepicker.css";

import "../src/assets/css/nucleo-svg.css";
import "../src/assets/css/material-dashboard.css";
import "../src/assets/css/nucleo-icons.css";


import Apple_icon from "../src/assets/img/apple-icon.png";

ReactDOM.render(
  <React.StrictMode>
     <BrowserRouter>
     <App />
     </BrowserRouter>
   
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
