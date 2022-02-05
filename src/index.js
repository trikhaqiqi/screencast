import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';
import { RecoilRoot } from 'recoil';

axios.defaults.baseURL = "https://apiscreencast.herokuapp.com/";
axios.defaults.withCredentials = true;

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
