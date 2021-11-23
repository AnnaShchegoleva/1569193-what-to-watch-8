import {Link, useParams} from 'react-router-dom';
import {AppRoute} from '../../const';
import SendCommentForm from '../send-comment-form/send-comment-form';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import {useEffect} from 'react';
import {getFilm} from '../../store/films-data/selectors';
import {useDispatch, useSelector} from 'react-redux';
import {fetchFilmAction} from '../../store/api-actions';
import LoadingScreen from '../loading-screen/loading-screen';

function AddReview(): JSX.Element {
  const id = parseInt(useParams<{id: string}>().id, 10);
  const film = useSelector(getFilm);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id && id !== film?.id) {
      dispatch(fetchFilmAction(id));
    }
  }, [dispatch, id, film?.id]);

  if (!film) {
    return (
      <LoadingScreen />
    );
  }
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.backgroundImage} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <Logo />

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link className="breadcrumbs__link" to={AppRoute.Film.replace(':id', String(film.id))}>{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <span className="breadcrumbs__link">Add review</span>
              </li>
            </ul>
          </nav>

          <UserBlock />
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.posterImage} alt={film.name} width="218" height="327"/>
        </div>
      </div>

      <SendCommentForm filmId={film.id}/>

    </section>
  );
}

export default AddReview;
