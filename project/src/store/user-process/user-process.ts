import {UserProcess} from '../../types/state';
import {AuthorizationStatus} from '../../const';
import {createReducer} from '@reduxjs/toolkit';
import {requireAuthorization, requireLogout} from '../action';

const initialState: UserProcess = {
  authInfo: undefined,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const userProcess = createReducer(initialState, (builder) => {
  builder
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload.authStatus;
      state.authInfo = action.payload.authInfo;
    })
    .addCase(requireLogout, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.authInfo = undefined;
    });
});

export {userProcess};
