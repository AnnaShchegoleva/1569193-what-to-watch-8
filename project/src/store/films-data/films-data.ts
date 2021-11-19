import {createReducer} from '@reduxjs/toolkit';
import {ALL_GENRES} from '../../const';
import {FilmsData} from '../../types/state';
import {
  changeGenre,
  increaseNumberOfFilms,
  loadFavoriteFilms,
  loadPromoFilm,
  loadSimilarFilms,
  showListFilms,
  updateFilmFavoriteStatus,
  loadReviews,
  loadFilm
} from '../action';

const initialState: FilmsData = {
  activeGenre: ALL_GENRES,
  films: [],
  favoriteFilms: [],
  similarFilms: [],
  showFilmsMore: 0,
  isDataLoaded: false,
  promoFilm: undefined,
  reviews: [],
  film: undefined,
};

const filmsData = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.activeGenre = action.payload;
    })
    .addCase(showListFilms, (state, action) => {
      state.films = action.payload.films;
      state.isDataLoaded = true;
    })
    .addCase(increaseNumberOfFilms, (state, action) => {
      state.showFilmsMore = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload.film;
    })
    .addCase(loadPromoFilm, (state, action) => {
      state.promoFilm = action.payload.promoFilm;
    })
    .addCase(loadFavoriteFilms, (state, action) => {
      state.favoriteFilms = action.payload.favoriteFilms;
    })
    .addCase(updateFilmFavoriteStatus, (state, action) => {
      if (state.film?.id === action.payload.id) {
        state.film.isFavorite = action.payload.isFavorite;
      }

      if (state.promoFilm?.id === action.payload.id) {
        state.promoFilm.isFavorite = action.payload.isFavorite;
      }
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload.similarFilms;
    })
    .addCase(loadReviews, (state, action) => {
      state.reviews = action.payload.reviews;
    });
});

export {filmsData};
