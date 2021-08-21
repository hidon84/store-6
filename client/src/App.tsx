import styled from 'styled-components';
import { Switch, Route } from '~/core/Router';
import '~/styles/app.css';
import Navigation from '~/components/base/Navigation';
import LoginPage from '~/pages/Login';
import SignUpPage from '~/pages/SignUp';
import AlertModal from './components/modal/AlertModal';
import ConfirmModal from './components/modal/ConfirmModal';
import MyPage from './pages/MyPage';
import ProductList from './pages/ProductList';
import MainPage from './pages/Main';

const Main = styled.main`
  position: relative;
  height: 100%;
  width: 1156px;
`;

const App = () => {
  return (
    <>
      <Navigation />
      <Main>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/signup">
            <SignUpPage />
          </Route>
          <Route path="/hello/:name/:number">
            <div>임시 Route</div>
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route exact path="/me">
            <MyPage />
          </Route>
        </Switch>
      </Main>
      <AlertModal />
      <ConfirmModal />
    </>
  );
};

export default App;
