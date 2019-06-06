import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from './routes/index';
import Welcome from "./components/Welcome/Welcome";

import {ConnectedRouter} from "connected-react-router";

import history from './store/history';

function App() {
  return (
      <Router>
          <ConnectedRouter history={history}>
          <Switch>
              <Route path="/" exact={true} component={Welcome} />
              {routes.map((route) => (
                  <Route key={route.path} path={route.path} component={route.component}/>
              ))}
          </Switch>
          </ConnectedRouter>
      </Router>
  );
}

export default App;
