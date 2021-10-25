import {FilmType} from '../../types/film';
import {Link} from 'react-router-dom';
import {AppRoute} from '../../const';
import SendCommentForm from '../send-comment-form/send-comment-form';

type Props = {
  film: FilmType,
}

function AddReview({film}:Props): JSX.Element {
  return (
    <section className="film-card film-card--full">
      <div className="film-card__header">
        <div className="film-card__bg">
          <img src={film.background_image} alt={film.name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.Main} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>

          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={AppRoute.Film.replace(':id', String(film.id))} className="breadcrumbs__link">{film.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <Link to={AppRoute.AddReview.replace(':id', String(film.id))} className="breadcrumbs__link">Add review</Link>
              </li>
            </ul>
          </nav>

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <Link to={AppRoute.Main} className="user-block__link">Sign out</Link>
            </li>
          </ul>
        </header>

        <div className="film-card__poster film-card__poster--small">
          <img src={film.poster_image} alt={film.name} width="218" height="327"/>
        </div>
      </div>

      <SendCommentForm />

    </section>
  );
}

export default AddReview;
