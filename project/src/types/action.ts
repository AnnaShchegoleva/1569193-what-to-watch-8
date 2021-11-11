import {changeGenre, increaseNumberOfFilms, showListFilms} from '../store/action';

export enum ActionType {
  ChangeGenre = 'wtw/changeGenre',
  ShowListFilms = 'wtw/showListFilms',
  IncreaseNumberOfFilms = 'wtw/increaseNumberOfFilms',
}

export type Actions =
  | ReturnType<typeof changeGenre>
  | ReturnType<typeof showListFilms>
  | ReturnType<typeof increaseNumberOfFilms>;
