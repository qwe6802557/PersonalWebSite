import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderRoutes from "../utils/renderRoutes";
import routes from './routes';
import RouteChangeTracker from '@/utils/nprogress';

function AppRouter () {
    return (
        <Router>
            <RouteChangeTracker />
            { renderRoutes(routes) }
        </Router>
    )
}

export default AppRouter;
