import {useDispatch, useSelector} from 'react-redux';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {FilmType} from '../../types/film';
import {AuthorizationStatus} from '../../const';
import {changeFilmFavoriteStatus} from '../../store/api-actions';

type MyListButtonProps = {
  film: FilmType
}

function MyListButton({film}: MyListButtonProps): JSX.Element | null {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector(getAuthorizationStatus);

  if (authorizationStatus === AuthorizationStatus.Auth) {
    return (
      <button className="btn btn--list film-card__button" type="button" onClick={() => dispatch(changeFilmFavoriteStatus(film.id, !film.isFavorite))}>
        {film.isFavorite ?
          <svg viewBox="0 0 18 14" width="18" height="14">
            <use xlinkHref="#in-list"></use>
          </svg>
          :
          <svg viewBox="0 0 19 20" width="19" height="20">
            <use xlinkHref="#add"></use>
          </svg>}
        <span>My list</span>
      </button>
    );
  } else {
    return null;
  }
}

export default MyListButton;
