import React, { useContext, useEffect, useState } from 'react';
import { FilterContext } from '~/pages/ProductList';
import { UnderlineBaeminColorSVG } from '~/assets';
import { setOrder } from '~/stores/productListModule';

import { TitleContainer, Title } from './index.style';

interface Props {
  content: string;
  order: string;
}

const OrderItem: React.FC<Props> = ({ order, content }) => {
  const { dispatch, ...currentState } = useContext(FilterContext);

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleImgClick = () => {
    if (order === 'recent') {
      dispatch(setOrder('recent'));
    }

    if (order === 'high-price') {
      dispatch(setOrder('high-price'));
    }

    if (order === 'low-price') {
      dispatch(setOrder('low-price'));
    }
  };

  useEffect(() => {
    if (order === currentState.state.order) {
      setIsSelected(true);
    } else {
      setIsSelected(false);
    }
  });

  return (
    <TitleContainer onClick={handleImgClick}>
      <Title className={isSelected && 'selected'}>{content}</Title>
      {isSelected && <img src={UnderlineBaeminColorSVG} alt="underline" />}
    </TitleContainer>
  );
};

export default OrderItem;
