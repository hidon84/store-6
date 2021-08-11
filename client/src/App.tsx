import React from 'react';
import Title from '~/Components/Title';
import { BrowserRouter, Switch, Route } from '~/core/Router';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/hello" exact>
          <Title>안녕</Title>
        </Route>
        <Route path="/world" exact>
          <Title>세상아!</Title>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
