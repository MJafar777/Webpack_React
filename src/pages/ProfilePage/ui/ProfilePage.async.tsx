import { lazy } from 'react';

export const ProfilePageAsync = lazy(
  async () =>
    await new Promise((resolve) => {
      // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
      setTimeout(() => {
        // @ts-expect-error
        resolve(import('./ProfilePage'));
      }, 1500);
    })
);
