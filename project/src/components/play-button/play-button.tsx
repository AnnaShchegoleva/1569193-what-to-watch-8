import {useDispatch} from 'react-redux';
import {useCallback} from 'react';
import {redirectToRoute} from '../../store/action';
import {AppRoute} from '../../const';


type PlayButtonProps = {
  filmId: number,
}

function PlayButton({filmId}: PlayButtonProps): JSX.Element {
  const dispatch = useDispatch();
  const toPlayer = useCallback(() => {
    dispatch(redirectToRoute(AppRoute.Player.replace(':id', filmId.toString())));
  }, [dispatch, filmId]);

  return (
    <button className="btn btn--play film-card__button" type="button" onClick={toPlayer}>
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </button>
  );
}

export default PlayButton;
