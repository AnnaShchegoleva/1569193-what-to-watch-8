import {GenreList} from '../const';
//import {filmsMock} from '../mocks/films';
import {State} from '../types/state';
import {Actions, ActionType} from '../types/action';

const initialState: State = {
  activeGenre: GenreList.AllGenres,
  films: [],
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeGenre: {
      return {...state, activeGenre: action.payload};
    }
    case ActionType.ShowListFilms: {
      return {...state, films: action.payload.films};
    }
      default:
        return state;
      }
  };
    /*
      return {...state, activeGenre, films: [...state.films]}.filter(((it) => it.genre === activeGenre))};
*/

  /* case ActionType.ShowListFilms: {
      const x = () => {*/
export {reducer};
