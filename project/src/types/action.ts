import {changeGenre, showListFilms} from '../store/action';

export enum ActionType {
  ChangeGenre = 'wtw/changeGenre',
  ShowListFilms = 'wtw/showListFilms',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof showListFilms>;
