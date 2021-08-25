import { useContext } from 'react';
import SetCartAmountContext from '../contexts/setCartAmountContext';

const useSetCartAmount = () => {
  const { setCartAmount } = useContext(SetCartAmountContext);
  return setCartAmount;
};

export default useSetCartAmount;
