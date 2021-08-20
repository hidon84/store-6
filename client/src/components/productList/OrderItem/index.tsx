import React, { useContext, useEffect, useState } from 'react';
import { FilterContext } from '~/pages/ProductList';
import { UnderlineBaeminColorSVG } from '~/assets';
import { setOrder } from '~/stores/productListModule';
import { TitleContainer, Title } from './index.style';
import { ProductsGetRequestQuery } from '~/lib/api/types';

interface Props {
  content: string;
  order: string;
}

const OrderItem: React.FC<Props> = ({ order, content }) => {
  const { dispatch, ...currentState } = useContext(FilterContext);

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleImgClick = () => {
    dispatch(setOrder(order as ProductsGetRequestQuery['order']));
  };

  useEffect(() => setIsSelected(order === currentState.state.order));

  return (
    <TitleContainer onClick={handleImgClick}>
      <Title className={isSelected && 'selected'}>{content}</Title>
      {isSelected && <img src={UnderlineBaeminColorSVG} alt="underline" />}
    </TitleContainer>
  );
};

export default OrderItem;
