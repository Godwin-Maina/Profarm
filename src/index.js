import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import './App.js';
import 'bootstrap/dist/css/bootstrap.css';
import {ProductContecxtprovider } from './context/productContext'  //wrap our APP component so that we can have accesss to it from any other place.

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

const root = ReactDOM.createRoot(document.getElementById('EasyFarm'));
root.render(
    <React.StrictMode>
      <ProductContecxtprovider> 
          <App/>
      </ ProductContecxtprovider>
     </React.StrictMode >

);






































// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals