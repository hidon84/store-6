import React from 'react';
import Hello from '~/Components/Hello';
import World from './Components/World';
import { BrowserRouter, Switch, Route } from '~/core/Router';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/hello">
          <Hello>안녕</Hello>
        </Route>
        <Route exact path="/world">
          <World>세상아</World>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
