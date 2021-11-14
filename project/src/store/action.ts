import {ActionType} from '../types/action';
import {Films, FilmType} from '../types/film';
import {AuthorizationStatus} from '../const';

export const changeGenre =  (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const loadPromoFilm = (film: FilmType) => ({
  type: ActionType.LoadPromoFilm,
  payload: film,
}as const);

export const showListFilms = (films: Films) => ({
  type: ActionType.ShowListFilms,
  payload: {
    films,
  },
} as const);

export const increaseNumberOfFilms = (showedFilms: number) => ({
  type: ActionType.IncreaseNumberOfFilms,
  payload: showedFilms,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
