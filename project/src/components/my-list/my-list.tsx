import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {FILMS_PER_STEP} from '../../const';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import UserBlock from '../user-block/user-block';
import {getMyList} from '../../store/films-data/selectors';
import {increaseNumberOfFilms} from '../../store/action';
import {fetchFavoriteFilmsAction} from '../../store/api-actions';


function MyList(): JSX.Element {
  const films = useSelector(getMyList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(increaseNumberOfFilms(FILMS_PER_STEP));
    dispatch(fetchFavoriteFilmsAction());
  }, [dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <div className="catalog__films-list">
          <FilmsList films={films} />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default MyList;
