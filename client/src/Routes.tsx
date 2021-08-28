import { FC } from 'react';
import { Switch, Route } from '~/core/Router';

import LoginPage from '~/pages/Login';
import SignUpPage from '~/pages/SignUp';
import MyPage from './pages/MyPage';
import ProductList from './pages/ProductList';
import MainPage from './pages/Main';
import CartAndShippingPage from './pages/CartAndShipping';
import ProductDetail from './pages/ProductDetail';
import GoogleCallbackPage from './pages/GoogleCallback';
import FacebookCallbackPage from './pages/FacebookCallback';
import LikeListPage from './pages/LikeList';

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
