import { Dispatch, SetStateAction } from 'react';
import createNamedContext from './createNamedContext';

export interface SetCartAmountContextState {
  setCartAmount: Dispatch<SetStateAction<number>>;
}

const SetCartAmountContext = createNamedContext<SetCartAmountContextState>(
  'SetCartAmountContext',
);

export default SetCartAmountContext;
