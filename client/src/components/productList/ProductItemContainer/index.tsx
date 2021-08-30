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
import FilterContext from '~/lib/contexts/filterContext';
import { ProductData } from '~/pages/ProductList';
import { FINISH_FETCH, INIT_FETCH, START_FETCH } from '~/stores/fetchModule';

import S from './index.style';

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
  const { state: filterState } = useContext(FilterContext);
  const { push } = useHistory();
  const pushToProductDetailPage = useCallback(
    (idx: number) => push(`/products/${idx}`),
    [],
  );

  return (
    <S.ProductItemContainerWrapper>
      <S.ItemList
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
        <S.NoResourceWrapper>
          {products.length === 0 && fetchState.action !== START_FETCH && (
            <NoResource content={NO_RESOURCE_CONTENT} />
          )}
        </S.NoResourceWrapper>
      </S.ItemList>
      <S.ListFooter>
        <S.ScrollTriggerDiv ref={ref} />
        {fetchState.action === FINISH_FETCH && !filterState.isLastPage && (
          <S.LoadingText>로딩중</S.LoadingText>
        )}
        {products.length !== 0 && filterState.isLastPage && (
          <S.LoadingText>끝</S.LoadingText>
        )}
      </S.ListFooter>
    </S.ProductItemContainerWrapper>
  );
};

export default forwardRef(ProductItemContainer);
