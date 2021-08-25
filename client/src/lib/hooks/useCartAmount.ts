import { useContext } from 'react';
import CartAmountContext from '../contexts/cartAmountContext';

const useCartAmount = () => {
  const { cartAmount } = useContext(CartAmountContext);
  return cartAmount;
};

export default useCartAmount;
