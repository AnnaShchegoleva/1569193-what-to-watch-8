import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import App from './components/app/app';
import {filmsMock} from './mocks/films';
import {reviewsMock} from './mocks/reviews';
import {reducer} from './store/reduser';

const store = createStore(
  reducer,
  composeWithDevTools(),
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        films = {filmsMock} reviews = {reviewsMock}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
