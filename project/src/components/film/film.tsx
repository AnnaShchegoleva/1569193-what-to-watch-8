/*import {useSelector} from 'react-redux';*/
/*import {FilmType} from '../../types/film';*/
import {AppRoute, AuthorizationStatus} from '../../const';
import {Link} from 'react-router-dom';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import Tabs from '../tabs/tabs';
import FilmsList from '../films-list/films-list';
import {useSelector, useDispatch} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {getFilm, getSimilarFilms, getReviews} from '../../store/films-data/selectors';
import {FILMS_PER_STEP} from '../../const';
import {useEffect} from 'react';
import {fetchFilmAction, fetchSimilarFilmsAction, fetchReviewsAction} from '../../store/api-actions';
import UserBlock from '../user-block/user-block';
import PlayButton from '../play-button/play-button';
import {useParams} from 'react-router-dom';
import MyListButton from '../add-my-list-button/add-my-list-button';
import {increaseNumberOfFilms} from '../../store/action';
import LoadingScreen from '../loading-screen/loading-screen';
import NotFound from '../not-found/not-found';

function Film(): JSX.Element {
  const idString = useParams<{id: string}>().id;

  const id = parseInt(idString, 10);
  const authorizationStatus = useSelector(getAuthorizationStatus);


  const reviews = useSelector(getReviews);

  const similarFilms = useSelector(getSimilarFilms);

  const film = useSelector(getFilm);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(increaseNumberOfFilms(FILMS_PER_STEP));
    dispatch(fetchFilmAction(id));
    dispatch(fetchSimilarFilmsAction(id));
    dispatch(fetchReviewsAction(id));
  }, [dispatch, id]);


  if (idString === AppRoute.NotFound) {
    return (
      <NotFound />
    );
  }

  if (!film) {
    return (
      <LoadingScreen/>
    );
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <Logo />

            <UserBlock />
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton filmId={film.id}/>

                <MyListButton film={film}/>
                {authorizationStatus === AuthorizationStatus.Auth && <Link to={AppRoute.AddReview.replace(':id', String(film.id))} className="btn film-card__button">Add review</Link>}
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327"/>
            </div>

            <Tabs film={film} reviews={reviews}></Tabs>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <FilmsList films={similarFilms.slice(0, 4)} />

          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default Film;
