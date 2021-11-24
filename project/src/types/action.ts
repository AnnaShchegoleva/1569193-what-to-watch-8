import {
  changeGenre,
  increaseNumberOfFilms,
  showListFilms,
  requireAuthorization,
  requireLogout,
  loadPromoFilm,
  loadFilm,
  loadSimilarFilms,
  loadFavoriteFilms,
  updateFilmFavoriteStatus,
  redirectToRoute,
  loadReviews
} from '../store/action';
import {ThunkAction} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  ChangeGenre = 'wtw/changeGenre',
  LoadPromoFilm = 'wtw/loadPromoFilm',
  ShowListFilms = 'wtw/showListFilms',
  IncreaseNumberOfFilms = 'wtw/increaseNumberOfFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  LoadFavoriteFilms = 'wtw/loadFavoriteFilms',
  UpdateFilmFavoriteStatus = 'wtw/updateFilmFavoriteStatus',
  RedirectToRoute = 'wtw/redirectToRoute',
  LoadReviews = 'wtw/loadReviews',
  LoadSimilarFilms = 'wtw/loadSimilarFilms',
  LoadFilm = 'wtw/loadFilm',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof loadPromoFilm>
  | ReturnType<typeof showListFilms>
  | ReturnType<typeof increaseNumberOfFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadFavoriteFilms>
  | ReturnType<typeof updateFilmFavoriteStatus>
  | ReturnType<typeof loadSimilarFilms>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof loadSimilarFilms>
  | ReturnType<typeof loadFilm>
  | ReturnType<typeof loadReviews>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

