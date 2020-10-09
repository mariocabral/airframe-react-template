import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router';

// ----------- Pages Imports ---------------
import ProjectsDashboard from './Dashboards/Projects';


// ----------- Layout Imports ---------------
import { DefaultNavbar } from './../layout/components/DefaultNavbar';
import { DefaultSidebar } from './../layout/components/DefaultSidebar';

//------ Route Definitions --------
// eslint-disable-next-line no-unused-vars
export const RoutedContent = () => {
    return (
        <Switch>
            <Redirect from="/" to="/dashboards/projects" exact />
            
            <Route path="/dashboards/projects" exact component={ProjectsDashboard} />
            
            { /*    404    */ }
            <Redirect to="/pages/error-404" />
        </Switch>
    );
};

//------ Custom Layout Parts --------
export const RoutedNavbars  = () => (
    <Route
            component={ DefaultNavbar }
    />
);

export const RoutedSidebars = () => (
    <Route
        component={ DefaultSidebar }
    />
);
