import {AuthorizationStatus} from './const';

export const isCheckAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const checkEmail = (email: string): boolean => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
export const checkPassword = (password: string): boolean => /[a-zA-Z]+/.test(password) && /[0-9]+/.test(password);
