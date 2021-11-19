import {Films, FilmType} from './film';
import {AuthorizationStatus} from '../const';
import {AuthInfo} from './auth-info';
import {Reviews} from './film';

export type FilmsData = {
  activeGenre: string,
  films: Films,
  favoriteFilms: Films,
  film?: FilmType,
  promoFilm?: FilmType,
  reviews: Reviews,
  showFilmsMore: number,
  isDataLoaded: boolean,
};

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  authInfo?: AuthInfo,
};

export type State = RootState;
