import { useState, useEffect } from 'react';
import App from './App';
import { BrowserRouter } from './core/Router';

import * as cartApi from '~/lib/api/cart';
import CartAmountContext from './lib/contexts/cartAmountContext';
import SetCartAmountContext from './lib/contexts/setCartAmountContext';
import UserContext from './lib/contexts/userContext';
import useAutoLogin from './lib/hooks/useAutoLogin';

import { alert } from './utils/modal';

const message = {
  failedToGetCartAmount: '장바구니 개수를 가져오는 데 실패했습니다.',
};

const Root = () => {
  const { userState, userDispatch } = useAutoLogin();
  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    if (userState.isLoggedIn) {
      cartApi
        .getCartAmount()
        .then((result) => setCartAmount(result.data.amount))
        .catch(() => alert(message.failedToGetCartAmount));
    }
  }, [userState.isLoggedIn]);

  return (
    <UserContext.Provider value={{ user: userState, userDispatch }}>
      <CartAmountContext.Provider value={{ cartAmount }}>
        <SetCartAmountContext.Provider value={{ setCartAmount }}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </SetCartAmountContext.Provider>
      </CartAmountContext.Provider>
    </UserContext.Provider>
  );
};

export default Root;
