import { useContext } from 'react';
import CartAmountContext from '../contexts/cartAmountContext';

const useCartAmount = () => {
  const cartAmountContext = useContext(CartAmountContext);

  if (!cartAmountContext) {
    return null;
  }

  const { cartAmount } = cartAmountContext;
  return cartAmount;
};

export default useCartAmount;
