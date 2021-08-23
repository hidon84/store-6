/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useContext } from 'react';
import { FilterContext } from '~/pages/ProductList';
import { setOrder } from '~/stores/productListModule';
import { OrderFilterWrapper, OrderHeder, OrderContainer } from './index.style';

import { RefreshSVG } from '~/assets';

import OrderItem from '../OrderItem';

const orders = [
  { order: 'recent', content: '최신순' },
  { order: 'price-low', content: '낮은가격순' },
  { order: 'price-high', content: '높은가격순' },
];

const OrderFilter: React.FC = () => {
  // const { dispatch, ...currentState } = useContext(FilterContext);
  const { dispatch } = useContext(FilterContext);

  const handleResetBtnClick = () => {
    dispatch(setOrder('recent'));
  };

  return (
    <OrderFilterWrapper>
      <OrderHeder>
        <div>보고 싶은 순서</div>
        <img onClick={handleResetBtnClick} src={RefreshSVG} alt="reset" />
      </OrderHeder>
      <OrderContainer>
        {orders.map((item) => (
          <OrderItem
            key={item.order}
            order={item.order}
            content={item.content}
          />
        ))}
      </OrderContainer>
    </OrderFilterWrapper>
  );
};

export default OrderFilter;
