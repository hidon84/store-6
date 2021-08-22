import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import CartItem from './index';

describe('<CartItem />', () => {
  it('should render same with snapshot', () => {
    const cartIdx = 1;
    const product = {
      idx: 1,
      thumbnail: 'test',
      title: 'test',
      price: 2,
    };
    const changeAmount = (price: number, type: string) => {};
    const removeCartItem = (cartId: number) => {};
    const { container } = render(
      <CartItem
        cartIdx={cartIdx}
        product={product}
        changeAmount={changeAmount}
        removeCartItem={removeCartItem}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
