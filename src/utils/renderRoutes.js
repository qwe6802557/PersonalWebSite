import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

const renderRoutes = (routes) => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>
            {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />}>
                    {route.children && route.children.length > 0 && renderRoutes(route.children)}
                </Route>
            ))}
        </Routes>
    </Suspense>
);

export default renderRoutes;
