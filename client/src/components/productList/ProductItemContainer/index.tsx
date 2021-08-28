import {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useContext,
} from 'react';
import NoResource from '~/components/common/NoResource';

import ProductItem from '~/components/product/ProductItem';

import { useHistory } from '~/core/Router';
import FetchContext from '~/lib/contexts/fetchContext';
import { ProductData } from '~/pages/ProductList';
import { INIT_FETCH, START_FETCH } from '~/stores/fetchModule';

import {
  ProductItemContainerWrapper,
  ListFooter,
  ItemList,
  NoResourceWrapper,
} from './index.style';

interface Props {
  products: ProductData[];
  ref: React.MutableRefObject<HTMLDivElement>;
}

const ProductItemContainer: ForwardRefRenderFunction<HTMLDivElement, Props> = (
  { products },
  ref,
) => {
  const NO_RESOURCE_CONTENT = '상품이 없어요 ㅜ ㅜ';
  const { state: fetchState } = useContext(FetchContext);
  const { push } = useHistory();
  const pushToProductDetailPage = useCallback(
    (idx: number) => push(`/products/${idx}`),
    [],
  );

  return (
    <ProductItemContainerWrapper>
      <ItemList
        isFetching={fetchState.action === START_FETCH}
        delayedTime={fetchState.forcedDelayTime / 1000}
      >
        {products.length !== 0 &&
          products.map(({ idx, thumbnail, discountedPrice, title }) => (
            <ProductItem
              key={idx}
              idx={idx}
              thumbnail={thumbnail}
              price={discountedPrice}
              title={title}
              onClick={() => pushToProductDetailPage(idx)}
            />
          ))}
        <NoResourceWrapper>
          {products.length === 0 && fetchState.action !== INIT_FETCH && (
            <NoResource content={NO_RESOURCE_CONTENT} />
          )}
        </NoResourceWrapper>
      </ItemList>
      {/* TODO: 원활한 UX를 위하여 추후에 로딩 스피너 또는 lazy loading 로직을 추가해야 합니다. */}
      <ListFooter ref={ref} />
    </ProductItemContainerWrapper>
  );
};

export default forwardRef(ProductItemContainer);
