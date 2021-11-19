import {ApiResponse} from '../store/api-actions';
import {FilmType} from '../types/film';

export const mapDataToFilm = (it: ApiResponse): FilmType => ({
  id: it['id'] as number,
  name: it['name'] as string,
  posterImage: it['posterImage'] as string,
  previewImage: it['previewImage'] as string,
  backgroundImage: it['backgroundImage'] as string,
  backgroundColor: it['backgroundColor'] as string,
  videoLink: it['videoLink'] as string,
  previewVideoLink: it['previewVideoLink'] as string,
  description: it['description'] as string,
  rating: it['rating'] as number,
  scoresCount: it['scoresCount'] as number,
  director: it['director'] as string,
  starring: it['starring'] as string[],
  runTime: it['runTime'] as number,
  genre: it['genre'] as string,
  released: it['released'] as number,
  isFavorite: it['is_favorite'] as boolean,
}) as FilmType;
