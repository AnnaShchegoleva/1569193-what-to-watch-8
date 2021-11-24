import {useEffect, memo} from 'react';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import {FILMS_PER_STEP} from '../../const';
import {useSelector, useDispatch} from 'react-redux';
import {getFilms, getPromoFilm, getLoadedDataStatus} from '../../store/films-data/selectors';
import {increaseNumberOfFilms} from '../../store/action';
import UserBlock from '../user-block/user-block';
import {fetchMoviesAction} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';
import AddMyListButton from '../add-my-list-button/add-my-list-button';
import PlayButton from '../play-button/play-button';


function MainScreen(): JSX.Element {
  const isDataLoaded = useSelector(getLoadedDataStatus);
  const films = useSelector(getFilms);
  const promoFilm = useSelector(getPromoFilm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAction());
    dispatch(increaseNumberOfFilms(FILMS_PER_STEP));
  }, [dispatch]);

  if (!isDataLoaded) {
    return (
      <LoadingScreen/>
    );
  }
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.backgroundImage} alt={promoFilm.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <UserBlock />
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.posterImage} alt={promoFilm.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton filmId={promoFilm.id} />
                <AddMyListButton film={promoFilm} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilmsList films={films} showGenreList />

          <div className="catalog__films-list">
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default memo(MainScreen);
