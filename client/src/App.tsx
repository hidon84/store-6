import React, { FC, createContext } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { BrowserRouter, Switch, Route } from '~/core/Router';
import '~/styles/app.css';
import Navigation from '~/components/Navigation';
import LoginPage from '~/pages/Login';
import AlertModal from './components/AlertModal';
import ConfirmModal from './components/ConfirmModal';
import MyPage from './pages/MyPage';

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
            <Route exact path="/me">
              <MyPage />
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
