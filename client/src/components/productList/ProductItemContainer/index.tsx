import {
  forwardRef,
  ForwardRefRenderFunction,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from 'react';
import NoResource from '~/components/common/NoResource';

import ProductItem from '~/components/product/ProductItem';

import { useHistory } from '~/core/Router';
import FetchContext from '~/lib/contexts/fetchContext';
import FilterContext from '~/lib/contexts/filterContext';
import { ProductData } from '~/pages/ProductList';
import { FINISH_FETCH, initFetch, START_FETCH } from '~/stores/fetchModule';
import { setNextPage } from '~/stores/productFilterModule';

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
  const { state: fetchState, dispatch: fetchDispatch } =
    useContext(FetchContext);
  const { state: filterState, dispatch: productFilterDispatch } =
    useContext(FilterContext);
  const { push } = useHistory();
  const pushToProductDetailPage = useCallback(
    (idx: number) => push(`/products/${idx}`),
    [],
  );
  const itemListRef = useRef<HTMLUListElement>();

  /**
   * 만약 item container의 높이가 윈도우 높이보다 작은데 마지막 페이지고,
   * fetchState.action이 FINISH_FETCH일 경우, 다음 페이지를 바로 요청합니다.
   * 이 조건은 화면을 축소 시켰을 때 요청할 경우,
   * 렌더가 되기 전 observing 이벤트가 발생해서 수정하게 된 조건입니다.
   */
  useEffect(() => {
    if (
      window.innerHeight > itemListRef.current.clientHeight &&
      !filterState.isLastPage &&
      fetchState.action === FINISH_FETCH
    ) {
      productFilterDispatch(setNextPage());
      fetchDispatch(initFetch());
    }
  });

  return (
    <S.ProductItemContainerWrapper>
      <S.ItemList
        isFetching={fetchState.action === START_FETCH}
        delayedTime={fetchState.forcedDelayTime / 1000}
        ref={itemListRef}
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
        <S.ScrollTriggerDiv ref={ref} aria-hidden="true" />
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
