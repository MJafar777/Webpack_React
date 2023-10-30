import React from 'react';
import { MainPage } from 'pages/MainPage';
import { AboutPage } from 'pages/AboutPage';
import { ProfilePage } from 'pages/ProfilePage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { ArticlesPage } from 'pages/ArticlesPage';
import { type RouteProps } from 'react-router-dom';
import { ArticleDetailsPage } from 'pages/ArticleDetailsPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAILS = 'article_details',
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.NOT_FOUND]: '*',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAILS]: '/articles/',
  [AppRoutes.PROFILE]: '/profile'
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },

  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  },

  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
    authOnly: true
  },
  [AppRoutes.ARTICLES]: {
      path: RoutePath.articles,
      element: <ArticlesPage />,
      authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAILS]: {
      path: `${RoutePath.article_details}:id`,
      element: <ArticleDetailsPage />,
      authOnly: true,
  },
  
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />
  }
};
