import {Films} from './film';
import {GenreList} from '../const';

export type State = {
  activeGenre: string,
  films: Films,
};
