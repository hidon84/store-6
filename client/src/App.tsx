import React from 'react';
import LoginPage from './Pages/Login';
import { BrowserRouter, Switch, Route } from '~/core/Router';

import '~/styles/app.css';
import '~/styles/reset.css';
import '~/styles/font.css';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route path="/hello/:name/:number">
          <div>임시 Route</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
