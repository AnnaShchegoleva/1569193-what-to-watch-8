import {AuthorizationStatus} from './const';

export const isCheckAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;
