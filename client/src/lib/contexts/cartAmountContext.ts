import createNamedContext from './createNamedContext';

export interface CartAmountContextState {
  cartAmount: number;
}

const CartAmountContext =
  createNamedContext<CartAmountContextState>('CartAmountContext');

export default CartAmountContext;
