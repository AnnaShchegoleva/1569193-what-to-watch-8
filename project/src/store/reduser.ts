import {AuthorizationStatus, FILMS_PER_STEP, GenreList} from '../const';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';

const promoMock =   {
  'name':'',
  'poster_image':'',
  'preview_image':'',
  'background_image':'',
  'background_color':'',
  'description':'',
  'rating':0,
  'scores_count':0,
  'director':'',
  'starring':[],
  'run_time':0,
  'genre':'',
  'released':0,
  'id':0,
  'is_favorite':false,
  'video_link':'',
  'preview_video_link':'',
};


const initialState: State = {
  activeGenre: GenreList.AllGenres,
  films: [],
  showFilmsMore: FILMS_PER_STEP,
  authorizationStatus: AuthorizationStatus.Unknown,
  isDataLoaded: false,
  promoFilm: promoMock,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.LoadPromoFilm:
      return {...state, promoFilm: action.payload} as State;
    case ActionType.ChangeGenre: {
      return {...state, activeGenre: action.payload} as State;
    }
    case ActionType.ShowListFilms: {
      return {...state, films: action.payload.films} as State;
    }
    case ActionType.RequireAuthorization: {
      return {...state, authorizationStatus: action.payload, isDataLoaded: true} as State;
    }
    case ActionType.RequireLogout: {
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth} as State;
    }
    case ActionType.IncreaseNumberOfFilms: {
      const showFilmsMore = action.payload;
      return {...state, showFilmsMore} as State;
    }
    default:
      return state;
  }
};

export {reducer};
