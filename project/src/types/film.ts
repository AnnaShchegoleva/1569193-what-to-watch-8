export type FilmType = {
  'id': number,
  'name': string,
  'poster_image': string,
  'preview_image': string,
  'background_image': string,
  'background_color': string,
  'description': string,
  'rating': number,
  'scores_count': number,
  'director': string,
  'starring': string[],
  'run_time': number,
  'genre': string,
  'released': number,
  'is_favorite': boolean,
  'video_link': string,
  'preview_video_link': string,
}

export type UserType = {
  'id': number,
  'name': string,
}

export type ReviewType = {
  'id': number,
  'user': UserType,
  'rating': number,
  'comment': string,
  'date': string,
}

export type PromoFilmType = {
  'title': string,
  'genre': string,
  'date': number,
}

export type Films = FilmType[];
export type Reviews = ReviewType[];
