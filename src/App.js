import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from './routes/index';
import Welcome from "./components/Welcome/Welcome";

function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" exact={true} component={Welcome} />
              {routes.map((route) => (
                  <Route key={route.path} path={route.path} component={route.component}/>
              ))}
          </Switch>
      </Router>
  );
}

export default App;
