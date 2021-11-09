import {connect, ConnectedProps} from 'react-redux';
import {Dispatch} from '@reduxjs/toolkit';
import {Actions} from '../../types/action';
import {State} from '../../types/state';
import {GenreList} from '../../const';

const mapStateToProps = (state: State) => ({
  activeGenre: state.activeGenre
  });

const mapDispatchToProps = (dipatch: Dispatch<Actions>) =>
  onGenreClick(genre: GenreList) {
  dispatch()
}
<ul className="catalog__genres-list">
  <li className="catalog__genres-item catalog__genres-item--active">
    <a href="#" className="catalog__genres-link">All genres</a>
  </li>
  <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">Comedies</a>
  </li>
  <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">Crime</a>
  </li>
  <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">Documentary</a>
  </li>
  <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">Dramas</a>
  </li>
  <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">Horror</a>
  </li>
  <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">Kids & Family</a>
  </li>
  <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">Romance</a>
  </li>
  <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">Sci-Fi</a>
  </li>
  <li className="catalog__genres-item">
    <a href="#" className="catalog__genres-link">Thrillers</a>
  </li>
</ul>
