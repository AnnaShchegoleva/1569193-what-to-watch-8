import {FilmType} from '../../types/film';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import FilmsList from '../films-list/films-list';
import Logo from '../logo/logo';
import Footer from '../footer/footer';

type Props = {
  films: FilmType[],
}


function MyList({films}:Props): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">My list</h1>

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
