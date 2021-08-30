import { FC } from 'react';
import { Switch, Route } from '~/core/Router';

import LoginPage from '~/pages/Login';
import SignUpPage from '~/pages/SignUp';
import MyPage from './pages/MyPage';
import MainPage from './pages/Main';
import CartAndShippingPage from './pages/CartAndShipping';
import GoogleCallbackPage from './pages/GoogleCallback';
import FacebookCallbackPage from './pages/FacebookCallback';
import LikeListPage from './pages/LikeList';
import ProductPage from './pages/Product';

const Routes: FC = () => {
  return (
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
      <Route exact path="/products">
        <ProductPage />
      </Route>
      <Route path="/products/:id">
        <ProductPage />
      </Route>
      <Route exact path="/me">
        <MyPage />
      </Route>
      <Route exact path="/cart">
        <CartAndShippingPage pageType="cart" />
      </Route>
      <Route exact path="/shipping">
        <CartAndShippingPage pageType="shipping" />
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
  );
};

export default Routes;
