import { FC, useEffect, useState, useCallback } from 'react';
import ProductDetailContainer from '~/components/productDetail/ProductDetailContainer';
import { useHistory, useParams } from '~/core/Router';
import { ErrorResponse, ProductDetailGetResponseBody } from '~/lib/api/types';
import * as productsApi from '~/lib/api/products';
import {
  ProductDetailWrapper,
  PrevPageArrow,
  LeftSection,
  RightSection,
  DivideLine,
  LayoutDivider,
  PrevPageButton,
} from './index.style';
import { alert, confirm } from '~/utils/modal';
import useSetCartAmount from '~/lib/hooks/useSetCartAmount';
import { detail1PNG, detail2PNG, detail3PNG, detail4PNG } from '~/assets';

const message = {
  failedToGetProductDetail: '상품 정보를 불러오는 데 실패했습니다',
  failedToAddToCart: '장바구니에 추가하는 데 실패했습니다.',
  successToAddToCart:
    '장바구니에 추가하였습니다. 장바구니 페이지로 이동하시겠습니까?',
  failedToLike: '좋아요 설정을 하는 데 실패했습니다.',
  successToLike: '이 상품에 좋아요 설정을 합니다.',
  successToUnLike: '이 상품에 대해 좋아요 설정을 해제합니다.',
};

const statusCodeAlreadyAdded = 409;

const ProductDetail: FC = () => {
  const setCartAmount = useSetCartAmount();
  const idx = Number(useParams().id);
  const isIdxValid = !(Number.isNaN(idx) || idx <= 0);
  const history = useHistory();
  const [product, setProduct] = useState<ProductDetailGetResponseBody>(null);

  useEffect(() => {
    if (!isIdxValid) {
      alert(message.failedToGetProductDetail);
      return;
    }
    setTimeout(() => {
      setProduct({
        viewCnt: 2,
        reviewCnt: 2,
        likeCnt: 3,
        updatedAt: '2018-05-05',
        originPrice: 1500,
        mandatoryInfo: { asdf: 'asdf' },
        shipInfo: { from: 'Japan' },
        policy: 'asdf',
        createdAt: '2018-03-18',
        description: 'description',
        discountedPrice: 2400,
        idx: 0,
        title: 'title',
        thumbnail: detail1PNG,
        images: [detail2PNG, detail3PNG, detail4PNG],
      });
    }, 400);
    // productsApi
    //   .getProductDetail(idx)
    //   .then((result) => {
    //     return setProduct(result.data);
    //   })
    //   .catch(() => alert(message.failedToGetProductDetail));
  }, [idx]);

  const onClickAddToCart = useCallback(() => {
    productsApi
      .postProductToCart(idx)
      .then((result) => {
        setCartAmount(result.data.amount);
        setProduct({ ...product, isCart: true });
        confirm(message.successToAddToCart, () => history.push('/cart'));
      })
      .catch(() => {
        alert(message.failedToAddToCart);
      });
  }, [idx, product, setCartAmount]);

  const onClickLike = useCallback(() => {
    if (product?.isLike) {
      productsApi
        .deleteProductFromLike(idx)
        .then(() => {
          setProduct({ ...product, isLike: false });
          alert(message.successToUnLike);
        })
        .catch(() => alert(message.failedToLike));
    } else {
      productsApi
        .postProductToLike(idx)
        .then(() => {
          setProduct({ ...product, isLike: true });
          alert(message.successToLike);
        })
        .catch((e: ErrorResponse) => {
          if (e.statusCode === statusCodeAlreadyAdded) {
            alert(message.successToLike);
            return;
          }
          alert(message.failedToLike);
        });
    }
  }, [idx, product]);
  if (product === null) return null;

  const { thumbnail, images } = product;
  return (
    <ProductDetailWrapper>
      <PrevPageButton>
        <PrevPageArrow />
      </PrevPageButton>
      <LeftSection>
        <img src={thumbnail} alt="thumbnail" />
        {images.map((image, imgIdx) => (
          <img key={`${image}`} src={image} alt={`detail_img_${imgIdx}`} />
        ))}
      </LeftSection>
      <LayoutDivider aria-hidden="true">
        <DivideLine />
      </LayoutDivider>
      <RightSection>
        <ProductDetailContainer
          product={product}
          onClickAddToCart={onClickAddToCart}
          onClickLike={onClickLike}
        />
      </RightSection>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
