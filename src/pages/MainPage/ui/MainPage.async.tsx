import { lazy } from 'react';

export const MainPageAsync = lazy(async () => await new Promise((resolve) => {
  // @ts-expect-error
  // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
  setTimeout(() => { resolve(import('./MainPage')); }, 1500);
}));
