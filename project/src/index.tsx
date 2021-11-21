import React from 'react';
import ReactDOM from 'react-dom';
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from 'react-redux';
import {Router as BrowserRouter} from 'react-router-dom';
import App from './components/app/app';
import {rootReduser} from './store/root-reduser';
import {redirect} from './store/middlewares/redirect';
import {createAPI} from './services/api';
import {AuthorizationStatus, AppRoute} from './const';
import {requireAuthorization, redirectToRoute} from './store/action';
import {checkAuthAction, fetchMoviesAction, fetchPromoFilmAction} from './store/api-actions';
import browserHistory from './browser-history';

const api = createAPI(
  () => store.dispatch(requireAuthorization(AuthorizationStatus.NoAuth)),
  () => store.dispatch(redirectToRoute(AppRoute.NotFound)),
);

const store = configureStore({
  reduser: rootReduser,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }).concat(redirect),
});

store.dispatch(checkAuthAction);
store.dispatch(fetchMoviesAction);
store.dispatch(fetchPromoFilmAction);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
