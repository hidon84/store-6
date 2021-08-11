import React from 'react';
import Title from '~/Components/Title';
import { BrowserRouter, Switch, Route } from '~/core/Router';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/hello">
          <Title>안녕</Title>
        </Route>
        <Route exact path="/world">
          <Title>세상아!</Title>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
