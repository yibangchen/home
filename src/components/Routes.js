import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './home/Home';

const routes = [
  {
    name: "Home",
    path: "/",
    component: Home
  },
];

const Routes = () => {
  return (
    <Router>
      <Switch>
        { routes.map( route => 
          <Route 
            key = {route.name}
            exact={route.exact}
            path={route.path}
            component={route.component}
          />          
          )}
      </Switch>
    </Router>
  );
}

export default Routes;