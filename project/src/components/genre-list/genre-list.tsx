import {FILMS_PER_STEP} from '../../const';
import {changeGenre, increaseNumberOfFilms} from '../../store/action';
import {useSelector, useDispatch} from 'react-redux';
import {getGenres, getActiveGenre} from '../../store/films-data/selectors';


function GenresList(): JSX.Element {
  const genres = useSelector(getGenres);
  const activeGenre = useSelector(getActiveGenre);
  const dispatch = useDispatch();

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={`catalog__genres-item${genre === activeGenre ? ' catalog__genres-item--active' : ''}`} onClick={() => {
          if (activeGenre !== genre) {
            dispatch(changeGenre(genre));
            dispatch(increaseNumberOfFilms(FILMS_PER_STEP));
          }
        }}
        >
          <span className="catalog__genres-link" style={{cursor: 'pointer'}}>{genre}</span>
        </li>))}
    </ul>
  );
}

export default GenresList;
