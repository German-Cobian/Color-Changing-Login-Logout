import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import userReducer from './redux/user'
import themeReducer from './redux/theme';

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
