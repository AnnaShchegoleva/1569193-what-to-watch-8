import {State} from '../../types/state';
import {FilmType, Films, Reviews} from '../../types/film';
import {ALL_GENRES} from '../../const';
import {NameSpace} from '../root-reducer';


export const getFilm = (state: State): FilmType | undefined => state[NameSpace.data].film;
export const getFilms = (state: State): Films => state[NameSpace.data].films;
export const getGenres = (state: State): string[] => [ALL_GENRES].concat(Array.from(new Set(state[NameSpace.data].films.map((film) => film.genre))).sort());
export const getActiveGenre = (state: State): string => state[NameSpace.data].activeGenre;
export const getPromoFilm = (state: State): FilmType => state[NameSpace.data].promoFilm || {} as FilmType;
export const getMyList= (state: State): Films => state[NameSpace.data].favoriteFilms;
export const getSimilarFilms = (state: State): Films => state[NameSpace.data].similarFilms;
export const getFilmsMore = (state: State): number => state[NameSpace.data].showFilmsMore;
export const getReviews = (state: State): Reviews => state[NameSpace.data].reviews;
export const getLoadedDataStatus = (state: State): boolean => state[NameSpace.data].isDataLoaded;

