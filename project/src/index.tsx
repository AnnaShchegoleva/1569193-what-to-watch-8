import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {filmsMock} from './mocks/films';
import {reviewsMock} from './mocks/reviews';

ReactDOM.render(
  <React.StrictMode>
    <App
      films = {filmsMock} reviews = {reviewsMock}
    />
  </React.StrictMode>,
  document.getElementById('root'));
