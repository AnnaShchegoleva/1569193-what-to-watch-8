import {Films, FilmType} from './film';
import {AuthorizationStatus} from '../const';
import {AuthInfo} from './auth-info';
import {Reviews} from './film';
import {RootState} from '../store/root-reducer';

export type FilmsData = {
  activeGenre: string,
  film?: FilmType,
  films: Films,
  favoriteFilms: Films,
  similarFilms: Films,
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
