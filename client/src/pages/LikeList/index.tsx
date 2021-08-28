import { FC, useCallback, useContext, useEffect, useState } from 'react';

import { useHistory } from '~/core/Router';
import NoResource from '~/components/common/NoResource';
import ProductItem from '~/components/product/ProductItem';
import SubPageHeader from '~/components/subpage/SubPageHeader';
import SubPageHeaderItem from '~/components/subpage/SubPageHeaderItem';
import SubPageWrapper from '~/components/subpage/SubPageWrapper';

import * as productsApi from '~/lib/api/products';
import * as likesApi from '~/lib/api/likes';
import { LikesGetResponseBody } from '~/lib/api/types/likes';
import { ErrorResponse } from '~/lib/api/types';
import UserContext from '~/lib/contexts/userContext';
import { alert } from '~/utils/modal';

import { ProductLikeItemWrapper, NoResourceWrapper } from './index.style';

const LikeListPage: FC = () => {
  const { user: userState } = useContext(UserContext);
  const history = useHistory();
  const [itemList, setItemList] = useState<LikesGetResponseBody[]>(null);
  const NO_RESOURCE_CONTENT = '상품이 없어요 ㅜ ㅜ';

  useEffect(() => {
    if (userState.error) {
      history.push('/', { from: '/like', error: 'accessWithoutToken' });
      return;
    }

    if (userState.isLoggedIn) {
      likesApi
        .getLikeItems()
        .then((result) => setItemList(result.data))
        .catch((e: ErrorResponse) => alert(e.message));
    }
  }, [userState]);

  const onClickItem = useCallback(
    (idx: number) => {
      history.push(`/products/${idx}`);
    },
    [history],
  );

  const onClickLikeHandler = useCallback(
    (idx: number) => {
      productsApi
        .deleteProductFromLike(idx)
        .then(() => {
          const nextItemList = [...itemList];
          const indexToDelete = nextItemList.findIndex(
            (v) => v.product.idx === idx,
          );
          nextItemList.splice(indexToDelete, 1);
          setItemList(nextItemList);
        })
        .catch((e: ErrorResponse) => alert(e.message));
    },
    [itemList, setItemList],
  );

  return (
    <SubPageWrapper width="759px">
      <SubPageHeader>
        <SubPageHeaderItem>좋아요 리스트</SubPageHeaderItem>
      </SubPageHeader>
      {itemList && itemList.length ? (
        <ProductLikeItemWrapper>
          {itemList?.map(({ idx, product }) => (
            <ProductItem
              key={idx}
              idx={product.idx}
              title={product.title}
              price={product.discountedPrice}
              thumbnail={product.thumbnail}
              isLikeItem
              isLike
              onClick={onClickItem}
              onClickLike={onClickLikeHandler}
            />
          ))}
        </ProductLikeItemWrapper>
      ) : (
        <NoResourceWrapper>
          <NoResource content={NO_RESOURCE_CONTENT} />
        </NoResourceWrapper>
      )}
    </SubPageWrapper>
  );
};

export default LikeListPage;
