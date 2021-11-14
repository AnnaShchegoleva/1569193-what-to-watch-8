import {FilmType} from '../types/film';
import {AuthData} from '../types/auth-data';
import {ThunkActionResult} from '../types/action';
import {showListFilms, loadPromoFilm, requireAuthorization, requireLogout} from './action';
import {setToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus} from '../const';

export const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmType>(APIRoute.PromoFilm);
    dispatch(loadPromoFilm(data));
  };

export const fetchFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.get<FilmType[]>(APIRoute.Films);
    dispatch(showListFilms(data));
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
      });
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    setToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };
