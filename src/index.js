import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker, message } from 'antd';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import CheckOut from './Components/checkOut.js';

ReactDOM.render(
  <React.StrictMode>
    <CheckOut />
  </React.StrictMode>,
  document.getElementById('root')
);
console.log(' ');

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
