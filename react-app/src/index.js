import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import {PageProvider} from './context/PageContext'
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <PageProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </PageProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
