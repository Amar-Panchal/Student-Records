import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import {Provider} from 'react-redux';
import store from './Redux/Store';

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store}>
    <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);

