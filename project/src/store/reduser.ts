import {GenreList, FILMS_PER_STEP} from '../const';
import {filmsMock} from '../mocks/films';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';

const initialState: State = {
  activeGenre: GenreList.AllGenres,
  films: filmsMock,
  showFilmsMore: FILMS_PER_STEP,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre: {
      return {...state, activeGenre: action.payload};
    }
    case ActionType.ShowListFilms: {
      return {...state, films: action.payload.films};
    }
    case ActionType.IncreaseNumberOfFilms: {
      const showFilmsMore = action.payload;
      return {...state, showFilmsMore};
    }
    default:
      return state;
  }
};

export {reducer};
