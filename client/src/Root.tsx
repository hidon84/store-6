import { useState, useEffect } from 'react';
import App from './App';
import { BrowserRouter } from './core/Router';
import CartAmountContext from './lib/contexts/cartAmountContext';
import SetCartAmountContext from './lib/contexts/setCartAmountContext';
import UserContext from './lib/contexts/userContext';
import * as authApi from '~/lib/api/auth';
import * as usersApi from '~/lib/api/users';
import * as cartApi from '~/lib/api/cart';
import { alert } from './utils/modal';
import userModule, { setError, setLogin } from './stores/userModule';
import { ErrorResponse } from './lib/api/types';

const message = {
  failedToGetCartAmount: '장바구니 개수를 가져오는 데 실패했습니다.',
};

// const useCartAmount = (isLoggedIn = false) => {
//   const [cartAmount, setCartAmount] = useState(0);

//   useEffect(() => {
//     if (isLoggedIn) {
//       cartApi
//         .getCartAmount()
//         .then((result) => setCartAmount(result.data.amount))
//         .catch(() => alert(message.failedToGetCartAmount));
//     }
//   }, [isLoggedIn]);

//   return { cartAmount, setCartAmount };
// };

const Root = () => {
  const [cartAmount, setCartAmount] = useState(0);

  const { state: userState, dispatch: userDispatch } = userModule();

  useEffect(() => {
    authApi
      .refresh()
      .then(() => usersApi.getMe())
      .then((response) => {
        userDispatch(setLogin(response.data));
      })
      .catch((error: ErrorResponse) => {
        userDispatch(setError(error.data));
      });
  }, [userState.isLoggedIn]);

  useEffect(() => {
    if (userState.isLoggedIn) {
      cartApi
        .getCartAmount()
        .then((result) => setCartAmount(result.data.amount))
        .catch(() => alert(message.failedToGetCartAmount));
    }
  }, [userState.isLoggedIn]);

  useEffect(() => {
    console.log(userState);
  }, [userState]);

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
