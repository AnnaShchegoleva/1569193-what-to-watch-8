import {ActionType} from '../types/action';
import {GenreList} from '../const';
import {Films} from '../types/film';

export const changeGenre =  (genre: string) => ({
  type: ActionType.ChangeGenre,
  payload: genre,
} as const);

export const showListFilms = (films: Films) => ({
  type: ActionType.ShowListFilms,
  payload: {
    films,
  }
} as const);
