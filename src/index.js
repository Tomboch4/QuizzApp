import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import rootReducer from "./reducers";
import { configureStore } from '@reduxjs/toolkit';
import "./styles/index.scss"

const store = configureStore({
  reducer: rootReducer,
  devTools:true,
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
