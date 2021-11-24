import {ThunkActionResult} from '../types/action';
import {
  showListFilms,
  loadPromoFilm,
  requireAuthorization,
  requireLogout,
  redirectToRoute,
  loadReviews,
  loadFavoriteFilms,
  loadFilm,
  loadSimilarFilms,
  updateFilmFavoriteStatus
} from './action';
import {setToken, dropToken} from '../services/token';
import {APIRoute, AppRoute, AuthorizationStatus} from '../const';
import {mapDataToFilm} from '../mappers/film-mapper';
import {mapDataToAuthInfo} from '../mappers/map-data-to-auth-info';
import {AuthData} from '../types/auth-data';
import {Reviews, AddReview} from '../types/film';
import {toast} from 'react-toastify';

const FETCH_ERROR = 'Не смог подгрузить данные.';
const NO_AUTH_ERROR = 'Пожалуйста, авторизуйтесь';
const AUTH_ERROR = 'Не смог авторизоваться';
const LOGOUT_ERROR = 'Не смог выйти';

type ResponseValueType = string | string[] | number | boolean;
export type ApiResponse = Record<string, ResponseValueType | Record<string, ResponseValueType>>;

export const fetchPromoFilmAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<ApiResponse>(APIRoute.PromoFilm);
      dispatch(loadPromoFilm(mapDataToFilm(data)));
    } catch {
      toast.error(FETCH_ERROR);
    }
  };

export const fetchMoviesAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<ApiResponse[]>(APIRoute.Films);
      dispatch(showListFilms(data.map((it) => mapDataToFilm(it))));
    } catch {
      toast.error(FETCH_ERROR);
    }
  };

export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.get<ApiResponse>(APIRoute.Login);
      const authInfo = mapDataToAuthInfo(data);
      const authorizationStatus = authInfo ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth;
      dispatch(requireAuthorization(authorizationStatus, authInfo));
    } catch {
      toast.error(NO_AUTH_ERROR);
    }
  };

export const loginAction = ({login: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      const {data} = await api.post<ApiResponse>(APIRoute.Login, {email, password});
      const authInfo = mapDataToAuthInfo(data);
      if (authInfo) {
        setToken(authInfo.token);
        dispatch(requireAuthorization(AuthorizationStatus.Auth, authInfo));
      }
      dispatch(redirectToRoute(AppRoute.Main));
    } catch {
      toast.error(AUTH_ERROR);
    }
  };


export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.delete(APIRoute.Logout);
      dropToken();
      dispatch(requireLogout());
    } catch {
      toast.error(LOGOUT_ERROR);
    }
  };

export const addReviewAction = (id: number, review: AddReview, cb: (isSuccess: boolean) => void): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.post<Reviews>(`/comments/${id}`, review);
      dispatch(loadReviews(data));
      cb(true);
    } catch {
      cb(false);
      toast.error('Не могу отправить форму');
    }
  };

export const fetchReviewsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<Reviews>(APIRoute.FilmReviews.replace('{id}', id.toString()));
      dispatch(loadReviews(data));
    } catch {
      toast.error(FETCH_ERROR);
    }
  };

export const fetchFavoriteFilmsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<ApiResponse[]>(APIRoute.FavoriteFilms);
      dispatch(loadFavoriteFilms(data.map((it) => mapDataToFilm(it))));
    } catch {
      toast.error(FETCH_ERROR);
    }
  };

export const changeFilmFavoriteStatus = (id: number, isFavorite: boolean): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const {data} = await api.post<ApiResponse>(APIRoute.FavoriteStatus.replace('{id}', id.toString()).replace('{status}', isFavorite ? '1' : '0'));
    const film = mapDataToFilm(data);
    dispatch(updateFilmFavoriteStatus(film.id, film.isFavorite));
  };

export const fetchFilmAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<ApiResponse>(`${APIRoute.Films}/${id}`);
      dispatch(loadFilm(mapDataToFilm(data)));
    } catch {
      toast.error(FETCH_ERROR);
    }
  };

export const fetchSimilarFilmsAction = (id: number): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const {data} = await api.get<ApiResponse[]>(APIRoute.SimilarFilms.replace('{id}', id.toString()));
      dispatch(loadSimilarFilms(data.map((it) => mapDataToFilm(it)).filter((it) => it.id !== id)));
    } catch {
      toast.error(FETCH_ERROR);
    }
  };
