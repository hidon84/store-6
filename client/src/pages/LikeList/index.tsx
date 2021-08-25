import { FC, useCallback, useEffect, useState } from 'react';
import ProductItem from '~/components/product/ProductItem';
import SubPageHeader from '~/components/subpage/SubPageHeader';
import SubPageHeaderItem from '~/components/subpage/SubPageHeaderItem';
import { useHistory } from '~/core/Router';
import { ProductLikeItemWrapper } from './index.style';
import * as productsApi from '~/lib/api/products';
import * as likesApi from '~/lib/api/likes';
import { LikesGetResponseBody } from '~/lib/api/types/likes';
import { alert } from '~/utils/modal';
import { ErrorResponse } from '~/lib/api/types';
import SubPageWrapper from '~/components/subpage/SubPageWrapper';
import useUser from '~/lib/hooks/useUser';

const LikeListPage: FC = () => {
  const [user] = useUser();
  const history = useHistory();
  const [itemList, setItemList] = useState<LikesGetResponseBody[]>(null);

  useEffect(() => {
    if (user) {
      likesApi
        .getLikeItems()
        .then((result) => setItemList(result.data))
        .catch((e: ErrorResponse) => alert(e.message));
    }
  }, [user]);

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
          const indexToDelete = nextItemList.findIndex((v) => v.idx === idx);
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
      <ProductLikeItemWrapper>
        {itemList?.map(({ idx, product }) => (
          <ProductItem
            key={idx}
            idx={idx}
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
    </SubPageWrapper>
  );
};

export default LikeListPage;
