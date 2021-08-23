import { FC, forwardRef, ForwardRefRenderFunction, useCallback } from 'react';

import styled from 'styled-components';
import ProductItem from '~/components/product/ProductItem';
import { useHistory } from '~/core/Router';
import { ProductData } from '~/pages/ProductList';

const ProductItemContainerWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 31px;
  padding-left: 7px;
`;

const ListFooter = styled.div`
  width: 100%;
  height: 20px;
`;

interface Props {
  products: ProductData[];
  ref: React.MutableRefObject<HTMLDivElement>;
}

const ProductItemContainer: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { products },
  ref,
) => {
  const { push } = useHistory();
  const pushToProductDetailPage = useCallback(
    (idx: number) => push(`/products/${idx}`),
    [],
  );

  return (
    <>
      <ProductItemContainerWrapper>
        {products.map(({ idx, thumbnail, price, title }) => (
          <ProductItem
            key={idx}
            idx={idx}
            thumbnail={thumbnail}
            price={price}
            title={title}
            onClick={() => pushToProductDetailPage(idx)}
          />
        ))}
      </ProductItemContainerWrapper>
      {/* TODO: 원활한 UX를 위하여 추후에 로딩 스피너 또는 lazy loading 로직을 추가해야 합니다. */}
      <ListFooter ref={ref} />
    </>
  );
};

export default forwardRef(ProductItemContainer);
