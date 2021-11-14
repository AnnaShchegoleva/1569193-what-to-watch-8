import {Films, FilmType} from './film';
import {AuthorizationStatus} from '../const';

export type State = {
  activeGenre: string,
  films: Films,
  promoFilm: FilmType,
  showFilmsMore: number,
  authorizationStatus: AuthorizationStatus,
  isDataLoaded: boolean,
};
