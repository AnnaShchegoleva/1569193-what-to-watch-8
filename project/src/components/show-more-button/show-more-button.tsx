import {FILMS_PER_STEP} from '../../const';

type ShowMoreProps = {
  changeFilmListAmount: (amount:number) => void,
  filmsAmount: number,
}

function ShowMoreButton({changeFilmListAmount, filmsAmount}:ShowMoreProps): JSX.Element {
  return(
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={() => changeFilmListAmount(filmsAmount + FILMS_PER_STEP)}>Show more</button>
    </div>
  );
}

export default ShowMoreButton;

