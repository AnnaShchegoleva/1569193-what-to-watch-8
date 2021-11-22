import {FilmType} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useMemo, memo} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getActiveGenre, getFilmsMore} from '../../store/films-data/selectors';
import {ALL_GENRES, FILMS_PER_STEP} from '../../const';
import GenresList from '../genre-list/genre-list';
import {increaseNumberOfFilms} from '../../store/action';
import ShowMoreButton from '../show-more-button/show-more-button';

type Props = {
  className?: string,
  films: FilmType[],
  title?: string,
  showGenreList?: boolean
}

function FilmsList({className, films, title, showGenreList}:Props): JSX.Element {
  const showFilmsMore = useSelector(getFilmsMore);
  const dispatch = useDispatch();
  const activeGenre = useSelector(getActiveGenre);

  const filterFilms = useMemo(() => {
    if (activeGenre === ALL_GENRES) {
      return films;
    }
    return films.filter((film) => film.genre === activeGenre);
  }, [activeGenre, films]);

  return (
    <section className={className ? `catalog ${className}` : 'catalog'}>
      {title ? <h2 className="catalog__title">{title}</h2> : <h2 className="catalog__title visually-hidden">Catalog</h2>}
      {showGenreList && <GenresList />}
      <div className="catalog__films-list">
        {filterFilms.slice(0, showFilmsMore).map((film) => <FilmCard key={film.id} film={film}/>)}
      </div>
      {(showFilmsMore < filterFilms.length) && <ShowMoreButton onClick={() => dispatch(increaseNumberOfFilms(showFilmsMore + FILMS_PER_STEP))} />}
    </section>
  );
}

export default memo(FilmsList);
