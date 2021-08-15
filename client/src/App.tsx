import React from 'react';
import World from './Components/World';
import LinkedHello from './Components/Hello';
import LoginPage from './Pages/Login';
import { BrowserRouter, Switch, Route } from '~/core/Router';

import "~/styles/app.css";
import "~/styles/reset.css";
import "~/styles/font.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/hello">
          <LinkedHello />
        </Route>
        <Route path="/hello/:name/:number">
          <LinkedHello />
        </Route>
        <Route exact path="/world">
          <World>세상아</World>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
