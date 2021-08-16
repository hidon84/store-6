import React, { FC, createContext } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from '~/core/Router';
import '~/styles/app.css';

import Navigation from '~/Components/Navigation';
import LoginPage from '~/Pages/Login';
import AlertModal from './Components/AlertModal';
import ConfirmModal from './Components/ConfirmModal';

const Main = styled.main`
  height: 100%;
  width: 1156px;
`;

const App = () => {
  return (
    <>
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
      <AlertModal />
      <ConfirmModal />
    </>
  );
};

export default App;
