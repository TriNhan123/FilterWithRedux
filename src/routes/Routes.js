import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import homePage from '../component/homePage/homePage';

const Routes = () => {
    return (
        <Router>
        <Switch>
            <Route path='/' component={homePage} exact={true} />
        </Switch>
        </Router>
    )
};


export default Routes;