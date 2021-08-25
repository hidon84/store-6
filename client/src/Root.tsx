import { useState, useEffect } from 'react';
import App from './App';
import { BrowserRouter } from './core/Router';
import CartAmountContext from './lib/contexts/cartAmountContext';
import SetCartAmountContext from './lib/contexts/setCartAmountContext';
import UserContext from './lib/contexts/userContext';
import useAutoLogin from './lib/hooks/useAutoLogin';
import * as cartApi from '~/lib/api/cart';

const message = {
  failedToGetCartAmount: '장바구니 개수를 가져오는 데 실패했습니다.',
};

const Root = () => {
  const [user, setUser] = useAutoLogin();
  const [cartAmount, setCartAmount] = useState(0);

  useEffect(() => {
    if (user) {
      cartApi
        .getCartAmount()
        .then((result) => setCartAmount(result.data.amount))
        .catch(() => alert(message.failedToGetCartAmount));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
