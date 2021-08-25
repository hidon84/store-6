import { useContext } from 'react';
import SetCartAmountContext from '../contexts/setCartAmountContext';

const useSetCartAmount = () => {
  const setCartAmountContext = useContext(SetCartAmountContext);

  if (!setCartAmountContext) {
    return null;
  }

  const { setCartAmount } = setCartAmountContext;
  return setCartAmount;
};

export default useSetCartAmount;
