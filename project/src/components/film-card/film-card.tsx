import {useState} from 'react';
import {FilmType} from '../../types/film';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';

type Props = {
  film: FilmType,
}

function FilmCard({film}:Props): JSX.Element {
  const [, setState] = useState(0);
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseOver={() => {setState(film.id);}}>
        <img src={film.preview_image} alt={film.name} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.replace(':id', String(film.id))}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
