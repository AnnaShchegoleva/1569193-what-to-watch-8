import {Token} from '../services/token';

export type AuthInfo = {
  id: number,
  email: string,
  name: string,
  avatarUrl: string,
  token: Token;
};
