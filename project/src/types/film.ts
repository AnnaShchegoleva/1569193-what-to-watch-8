export type FilmType = {
  'id': number,
  'name': string,
  'posterImage': string,
  'previewImage': string,
  'backgroundImage': string,
  'backgroundColor': string,
  'description': string,
  'rating': number,
  'scoresCount': number,
  'director': string,
  'starring': string[],
  'runTime': number,
  'genre': string,
  'released': number,
  'isFavorite': boolean,
  'videoLink': string,
  'previewVideoLink': string,
}

export type ReviewType = {
  'id': number,
  'user': {
    'id': number,
    'name': string,
  },
  'rating': number,
  'comment': string,
  'date': string,
}

export type AddReview = {
  rating: number;
  comment: string;
};

export type Films = FilmType[];
export type Reviews = ReviewType[];
