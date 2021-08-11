import React from 'react';
import World from './Components/World';
import LinkedHello from './Components/Hello';
import { BrowserRouter, Switch, Route } from '~/core/Router';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/hello">
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
