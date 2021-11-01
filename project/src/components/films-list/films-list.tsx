import {FilmType} from '../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type Props = {
  films: FilmType[],
}

function FilmsList({films}:Props): JSX.Element {
  const [filmStateID, changeFilmStateID] = useState(0);
  return (
    <>
      {films.map((film) => <FilmCard key = {film.id} film = {film} filmStateID={filmStateID} changeFilmIDState={changeFilmStateID}/>)}
    </>
  );
}

export default FilmsList;
