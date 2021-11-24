import {AuthorizationStatus} from './const';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

const ONE_HOUR = 3600;

dayjs.extend(duration);

export const isCheckAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

export const checkEmail = (email: string): boolean => /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email);
export const checkPassword = (password: string): boolean => /[a-zA-Z]+/.test(password) && /[0-9]+/.test(password);

export const getRemainingTime = (remainingTime: number): string => {
  const remainingTimeFormat = remainingTime >= ONE_HOUR ? '-HH:mm:ss' : '-mm:ss';
  return dayjs.duration(remainingTime, 'seconds').format(remainingTimeFormat);
};

export const formatReviewDate = (date: Date | string): string => {
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  if (typeof date === 'string') {
    date = new Date(date);
  }

  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  return `${months[month]} ${day}, ${year}`;
};
