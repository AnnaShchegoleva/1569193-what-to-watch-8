import {changeGenre, increaseNumberOfFilms, showListFilms, requireAuthorization, requireLogout, loadPromoFilm} from '../store/action';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AxiosInstance} from 'axios';
import {State} from './state';

export enum ActionType {
  ChangeGenre = 'wtw/changeGenre',
  LoadPromoFilm = 'wtw/loadPromoFilm',
  ShowListFilms = 'wtw/showListFilms',
  IncreaseNumberOfFilms = 'wtw/increaseNumberOfFilms',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof loadPromoFilm>
  | ReturnType<typeof showListFilms>
  | ReturnType<typeof increaseNumberOfFilms>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
