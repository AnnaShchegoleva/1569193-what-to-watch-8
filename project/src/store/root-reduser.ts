import {combineReducers} from '@reduxjs/toolkit';
import {filmsData} from './films-data/films-data';
import {userProcess} from './user-process/user-process';

export enum NameSpace {
  data = 'DATA',
  user = 'USER',
}

export const rootReduser = combineReducers({
  [NameSpace.data]: filmsData,
  [NameSpace.user]: userProcess,
});

export type RootState = ReturnType<typeof rootReduser>;
