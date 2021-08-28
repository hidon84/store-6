import React from 'react';
import { OrderFilterWrapper, OrderHeder, OrderContainer } from './index.style';

import OrderItem from '../OrderItem';

const orders = [
  { order: 'recent', content: '최신순' },
  { order: 'price-low', content: '낮은가격순' },
  { order: 'price-high', content: '높은가격순' },
];

const OrderFilter: React.FC = () => (
  <OrderFilterWrapper>
    <OrderHeder>
      <div>보고 싶은 순서</div>
    </OrderHeder>
    <OrderContainer>
      {orders.map((item) => (
        <OrderItem key={item.order} order={item.order} content={item.content} />
      ))}
    </OrderContainer>
  </OrderFilterWrapper>
);

export default OrderFilter;
