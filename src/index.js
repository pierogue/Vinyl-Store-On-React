import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter.js'
import searchReducer from './searchSlice.js'
import catalogReducer from './catalogSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    search : searchReducer,
    catalog : catalogReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
