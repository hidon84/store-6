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

// @TODO Delete dummies
const dummies = [];

for (let i = 0; i < 100; i += 1) {
  dummies.push({
    idx: i + 1,
    thumbnail:
      'https://store-6-bucket.s3.ap-northeast-2.amazonaws.com/product/sample.jpeg',
    title: `test${i}`,
    price: 3000,
    createdAt: '',
    updatedAt: '',
  });
}

const LikeListPage: FC = () => {
  const history = useHistory();
  const [itemList, setItemList] = useState<LikesGetResponseBody[]>(null);

  useEffect(() => {
    // @TODO Delete dummies
    setItemList(dummies);
    likesApi
      .getLikeItems()
      .then((result) => setItemList(result.data))
      .catch((e: ErrorResponse) => alert(e.message));
  }, []);

  const onClickItem = useCallback(
    (idx: number) => {
      history.push(`/products/${idx}`);
    },
    [history],
  );

  const onClickLikeHandler = useCallback(
    (idx: number) => {
      // @TODO API 테스트 이후 삭제해야 함
      // const nextItemList = [...itemList];
      // const indexToDelete = nextItemList.findIndex((v) => v.idx === idx);
      // if (indexToDelete <= -1) return;
      // nextItemList.splice(indexToDelete, 1);
      // setItemList(nextItemList);
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
        {/* @TODO LikesGetResponseBody 타입이 변경되면 수정해야 할 부분!! */}
        {itemList?.map(({ idx, name, price, thumbnail }) => (
          <ProductItem
            key={idx}
            idx={idx}
            title={name}
            price={price}
            thumbnail={thumbnail}
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
