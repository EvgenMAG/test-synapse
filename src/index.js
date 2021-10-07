import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'modern-normalize/modern-normalize.css';
import { BrowserRouter } from 'react-router-dom';

import './index.css';

import App from './App.js';

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
