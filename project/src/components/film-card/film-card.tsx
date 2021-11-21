import {FilmType} from '../../types/film';
import {AppRoute} from '../../const';
import {Link} from 'react-router-dom';
import VideoPlayer from '../video-player/video-player';
import {useState, memo} from 'react';

type Props = {
  film: FilmType,
}

function FilmCard({film}:Props): JSX.Element {
  const [isActive, setIsActive] = useState(false);

  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image" onMouseMove={() => setIsActive(true)} onMouseLeave={() => setIsActive(false)}>
        {isActive ? <VideoPlayer poster={film.previewImage} isPlaying src={film.videoLink}/> : <img src={film.previewImage} alt={film.name} width="280" height="175"/>}
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={AppRoute.Film.replace(':id', String(film.id))}>{film.name}</Link>
      </h3>
    </article>
  );
}

export default memo(FilmCard);
