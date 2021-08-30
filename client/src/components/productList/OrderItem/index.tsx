import React, { useContext, useEffect, useState } from 'react';
import { UnderlineBaeminColorSVG } from '~/assets';
import { ProductsGetRequestQuery } from '~/lib/api/types';

import { setOrder } from '~/stores/productFilterModule';
import { startFetch } from '~/stores/fetchModule';
import scrollToTop from '~/utils/scrollToTop';

import FilterContext from '~/lib/contexts/filterContext';
import FetchContext from '~/lib/contexts/fetchContext';

import { TitleContainer, Title } from './index.style';

interface Props {
  content: string;
  order: string;
}

const OrderItem: React.FC<Props> = ({ order, content }) => {
  const { dispatch, ...currentState } = useContext(FilterContext);
  const { dispatch: fetchDispatch } = useContext(FetchContext);

  const [isSelected, setIsSelected] = useState<boolean>(false);

  const handleImgClick = () => {
    dispatch(setOrder(order as ProductsGetRequestQuery['order']));
    fetchDispatch(startFetch());
    scrollToTop({ behavior: 'auto' });
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
