import {FilmType} from '../../types/film';
import {useMemo} from 'react';

type TabOverviewProps = {
  film: FilmType;
}

function TabOverview({film}: TabOverviewProps): JSX.Element {

  const rank = useMemo(() => {
    if (film.rating < 3) {
      return 'Bad';
    }
    if (film.rating < 5) {
      return 'Normal';
    }
    if (film.rating < 8) {
      return 'Good';
    }
    if (film.rating < 10) {
      return 'Very good';
    }
    return 'Awesome';
  }, [film.rating]);


  const formatStarring = (starring: string[]): string => {
    if (starring.length > 4) {
      return `${starring.slice(0, 4).join(', ')} and other`;
    }
    return starring.join(', ');
  };

  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{rank}</span>
          <span className="film-rating__count">{film.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film.description}</p>

        <p className="film-card__director"><strong>Director: {film.director}</strong></p>
        <p className="film-card__starring"><strong>Starring: {formatStarring(film.starring)}</strong></p>
      </div>

    </>
  );
}

export default TabOverview;
