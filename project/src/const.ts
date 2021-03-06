export const FILMS_PER_STEP = 8;

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  MyList = '/mylist',
  Film = '/films/:id',
  AddReview = '/films/:id/review',
  Player = '/player/:id',
  NotFound = 'NotFound'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const ALL_GENRES = 'All genres';

export enum APIRoute {
  PromoFilm = '/promo',
  Films = '/films',
  Login = '/login',
  Logout = '/logout',
  FavoriteFilms = '/favorite',
  SimilarFilms = 'films/{id}/similar',
  FilmReviews = '/comments/{id}',
  FavoriteStatus = '/favorite/{id}/{status}',
}
