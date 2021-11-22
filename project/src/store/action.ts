import {ActionType} from '../types/action';
import {Films, FilmType, Reviews} from '../types/film';
import {AuthorizationStatus, AppRoute} from '../const';
import {AuthInfo} from '../types/auth-info';
import {createAction} from '@reduxjs/toolkit';

export const changeGenre =  createAction(
  ActionType.ChangeGenre,
  (genre: string) => ({
    payload: genre,
  }),
);

export const loadPromoFilm = createAction(
  ActionType.LoadPromoFilm,
  (promoFilm: FilmType) => ({
    payload: {
      promoFilm,
    },
  }),
);

export const showListFilms = createAction(
  ActionType.ShowListFilms,
  (films: Films) => ({
    payload: {
      films,
    },
  }),
);

export const increaseNumberOfFilms = createAction(
  ActionType.IncreaseNumberOfFilms,
  (showedFilms: number) => ({
    payload: showedFilms,
  }),
);

export const loadFavoriteFilms = createAction(
  ActionType.LoadFavoriteFilms,
  (favoriteFilms: Films) => ({
    payload: {
      favoriteFilms,
    },
  }),
);

export const updateFilmFavoriteStatus = createAction(
  ActionType.UpdateFilmFavoriteStatus,
  (id: number, isFavorite: boolean) => ({
    payload: {
      id,
      isFavorite,
    },
  }),
);

export const loadReviews = createAction(
  ActionType.LoadReviews,
  (reviews: Reviews) => ({
    payload: {
      reviews,
    },
  }),
);

export const loadSimilarFilms = createAction(
  ActionType.LoadSimilarFilms,
  (similarFilms: Films) => ({
    payload: {
      similarFilms,
    },
  }),
);

export const loadFilm = createAction(
  ActionType.LoadFilm,
  (film: FilmType) => ({
    payload: {
      film,
    },
  }),
);

export const requireAuthorization = createAction(
  ActionType.RequireAuthorization,
  (authStatus: AuthorizationStatus, authInfo?: AuthInfo) => ({
    payload: {
      authStatus,
      authInfo,
    },
  }),
);

export const requireLogout = createAction(
  ActionType.RequireLogout,
);

export const redirectToRoute = createAction(
  ActionType.RedirectToRoute,
  (url: AppRoute | string) => ({
    payload: url,
  }),
);
