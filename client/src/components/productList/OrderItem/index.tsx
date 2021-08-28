import React, { useContext, useEffect, useState } from 'react';
import { FetchContext, FilterContext } from '~/pages/ProductList';
import { UnderlineBaeminColorSVG } from '~/assets';
import { setOrder } from '~/stores/productListModule';
import { TitleContainer, Title } from './index.style';
import { ProductsGetRequestQuery } from '~/lib/api/types';
import { startFetch } from '~/stores/fetchModule';
import scrollToTop from '~/utils/scrollToTop';

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
