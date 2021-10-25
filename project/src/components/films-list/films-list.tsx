import {FilmType} from '../../types/film';
import FilmCard from '../film-card/film-card';

type Props = {
  films: FilmType[],
}

function FilmsList({films}:Props): JSX.Element {
  return (
    <>
      {films.map((film) => <FilmCard key = {film.id} film = {film} />)}
    </>
  );
}

export default FilmsList;
