import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from '~/core/Router';

import LoginPage from './Pages/Login';
import '~/styles/app.css';

const Main = styled.main`
  width: 1156px;
`;

const App = () => {
  return (
    <BrowserRouter>
      <nav />
      <Main>
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route path="/hello/:name/:number">
            <div>임시 Route</div>
          </Route>
        </Switch>
      </Main>
    </BrowserRouter>
  );
};

export default App;
