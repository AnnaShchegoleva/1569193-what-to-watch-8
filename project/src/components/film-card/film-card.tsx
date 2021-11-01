import {FilmType} from '../../types/film';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';

type Props = {
  film: FilmType,
  changeFilmIDState: any,
  filmStateID: number,
}

function FilmCard({film, changeFilmIDState, filmStateID}:Props): JSX.Element {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseOver={() => {changeFilmIDState(film.id);}}>
        {filmStateID === film.id ? <VideoPlayer poster={film.preview_image} isPlaying src={film.video_link}/> : <img src={film.preview_image} alt={film.name} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.replace(':id', String(film.id))}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default FilmCard;
