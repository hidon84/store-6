import {
  FC,
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useContext,
  useMemo,
} from 'react';

import ProductItem from '~/components/product/ProductItem';
        
import { useHistory } from '~/core/Router';
import { FetchContext, ProductData } from '~/pages/ProductList';

import {
  ProductItemContainerWrapper,
  ListFooter,
  ItemList,
} from './index.style';

interface Props {
  products: ProductData[];
  ref: React.MutableRefObject<HTMLDivElement>;
}

const ProductItemContainer: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { products },
  ref,
) => {
  const { state: fetchState } = useContext(FetchContext);
  const { push } = useHistory();
  const pushToProductDetailPage = useCallback(
    (idx: number) => push(`/products/${idx}`),
    [],
  );

  return (
    <ProductItemContainerWrapper>
      <ItemList
        isFetching={fetchState.state === 'START_FETCH'}
        delayedTime={fetchState.forcedDelayTime / 1000}
      >
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
      </ItemList>
      {/* TODO: 원활한 UX를 위하여 추후에 로딩 스피너 또는 lazy loading 로직을 추가해야 합니다. */}
      <ListFooter ref={ref} />
    </ProductItemContainerWrapper>
  );
};

export default forwardRef(ProductItemContainer);
