import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {GenreList} from '../../const';
import {changeGenre} from '../../store/action';

const mapStateToProps = (state: State) => ({
  activeGenre: state.activeGenre,
  films: state.films,
});

const mapDispatchToProps = (dispatch: Dispatch<Actions>) => ({
  onGenreClick(genre: GenreList) {
    dispatch(changeGenre(genre));
  },
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type GenreProps = ConnectedProps<typeof connector>

function GenresList(props: GenreProps): JSX.Element {
  const {activeGenre, onGenreClick} = props;

  const handleGenreClick = (genre: GenreList) => (evt: React.MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();
    onGenreClick(genre);
  };

  return (
    <ul className="catalog__genres-list">
      {Object.values(GenreList).map((it) => (
        <li
          key={it}
          className={`catalog__genres-item ${it === activeGenre ? 'catalog__genres-item--active' : ''} `}
        >
          <a href={'/'} className="catalog__genres-link" id={`genre-${it}`} onClick={handleGenreClick(it)}>
            {it}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default connector(GenresList);
