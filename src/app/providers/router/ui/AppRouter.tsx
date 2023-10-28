import { Route, Routes } from 'react-router-dom';
import React, { memo, Suspense, useCallback } from 'react';
import { PageLoader } from 'shared/ui/PageLoader/PageLoader';
import { RequireAuth } from 'app/providers/router/ui/RequireAuth';
import { AppRoutesProps, routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = (
        <Suspense fallback={<PageLoader />}>
            <div className="page-wrapper">
                {route.element}
            </div>
        </Suspense>
    );

    return (
        <Route
            key={route.path}
            path={route.path}
            element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
        />
    );
}, []);

  return (
    <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
    </Routes>
);
};

export default memo(AppRouter);
