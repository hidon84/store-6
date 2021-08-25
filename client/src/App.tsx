import { useEffect } from 'react';
import styled from 'styled-components';
import { Switch, Route, useHistory } from '~/core/Router';
import '~/styles/app.css';
import Navigation from '~/components/base/Navigation';
import LoginPage from '~/pages/Login';
import SignUpPage from '~/pages/SignUp';
import AlertModal from './components/modal/AlertModal';
import ConfirmModal from './components/modal/ConfirmModal';
import MyPage from './pages/MyPage';
import ProductList from './pages/ProductList';
import MainPage from './pages/Main';
import CartPage from './pages/Cart';
import ProductDetail from './pages/ProductDetail';
import GoogleCallbackPage from './pages/GoogleCallback';
import FacebookCallbackPage from './pages/FacebookCallback';
import LikeListPage from './pages/LikeList';
import titles from './lib/constants/titles';

const Main = styled.main`
  position: relative;
  height: calc(100% - 104px);
  width: 1156px;
`;

const App = () => {
  const { location } = useHistory();

  useEffect(() => {
    Object.entries(titles).forEach(([key, val]) => {
      if (location.pathname.includes(key)) document.title = val;
    });
  }, [location]);

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
          <Route path="/signup/:stage">
            <SignUpPage />
          </Route>
          <Route path="/hello/:name/:number">
            <div>임시 Route</div>
          </Route>
          <Route exact path="/products">
            <ProductList />
          </Route>
          <Route path="/products/:id">
            <ProductDetail />
          </Route>
          <Route exact path="/me">
            <MyPage />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route exact path="/like">
            <LikeListPage />
          </Route>
          <Route exact path="/oauth/google/callback">
            <GoogleCallbackPage />
          </Route>
          <Route exact path="/oauth/facebook/callback">
            <FacebookCallbackPage />
          </Route>
        </Switch>
      </Main>
      <AlertModal />
      <ConfirmModal />
    </>
  );
};

export default App;
