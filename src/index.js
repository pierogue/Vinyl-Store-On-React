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
import cartReducer from './cartSlice'
import userReducer from './userSlice'
import authReducer from './authSlice'

console.log(process.env.REACT_APP_API_URL);
const store = configureStore({
  reducer: {
    counter: counterReducer,
    search : searchReducer,
    catalog : catalogReducer,
    cart : cartReducer,
    user : userReducer,
    auth : authReducer,
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
