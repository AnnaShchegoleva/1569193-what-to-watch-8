import {FilmType} from '../../types/film';
import {State} from '../../types/state';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import Footer from '../footer/footer';
import {connect, ConnectedProps } from 'react-redux';
import {GenreList, FILMS_PER_STEP} from '../../const';
import GenresList from '../genre-list/genre-list';
import {useState} from 'react';
import ShowMoreButton from '../show-more-button/show-more-button';


const mapStateToProps = ({films, activeGenre}: State) => ({
  films: getFilteredFilms(films, activeGenre),
});

const connector = connect(mapStateToProps);

type MainProps = ConnectedProps<typeof connector> & {
  films: FilmType[],
  promoFilm: FilmType,
}

const getFilteredFilms = (films:FilmType[], genre:string) => {
  if (genre === GenreList.AllGenres) {
    return films;
  }
  return films.filter((film:FilmType) => film.genre === genre);
};

function MainScreen({films, promoFilm}: MainProps): JSX.Element {
  const [filmListAmount, changeFilmListAmount] = useState(FILMS_PER_STEP);
  return (
    <>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promoFilm.preview_image} alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <Logo />

          <ul className="user-block">
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
              </div>
            </li>
            <li className="user-block__item">
              <a href="/" className="user-block__link">Sign out</a>
            </li>
          </ul>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={promoFilm.preview_image} alt={promoFilm.name} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promoFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promoFilm.genre}</span>
                <span className="film-card__year">{promoFilm.released}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenresList />

          <div className="catalog__films-list">
            <FilmsList films={films.slice(0, filmListAmount)} />
          </div>

          {filmListAmount < films.length ? <ShowMoreButton changeFilmListAmount={changeFilmListAmount} filmsAmount={filmListAmount}/> : ''}

          {/* <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>*/}
        </section>

        <Footer />
      </div>
    </>
  );
}

export default connector(MainScreen);
