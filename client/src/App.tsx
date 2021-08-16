import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from '~/core/Router';
import '~/styles/app.css';

import Navigation from '~/Components/Navigation/Navigation';
import LoginPage from '~/Pages/Login';

const Main = styled.main`
  width: 1156px;
`;

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
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
