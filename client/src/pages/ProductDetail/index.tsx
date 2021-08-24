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

const dummyProductInfo = {
  name: '요모포켓X배달이친구들 엉클배달이 포켓',
  originPrice: 99000,
  discountedPrice: 64000,
  mandatoryInfo: {
    제품명: '요모포켓X배달이친구들 독고배달이 포켓',
    치수: '6 x 7 x 10.3cm',
    제조국: '한국(소품, 피규어, 패키지) / 중국(케이스)',
    사용연령: '14세 이상',
    안전표시: '작은 부품은 질식할 위험이 있으니 절대로 입에 넣지 마세요',
  },
  deliveryInfo: {
    배송사: 'CJ 대한통운',
    배송비:
      '2,500원 (3만원 이상 구매 시 무료배송)\n도서, 산간 일부이경느 배송비가 추가될 수 있습니다.',
    배송기간:
      '오후 2시 이전 결제완료시 당일 출고 (영업일 기준)\n\n단, 상품의 재고 상황, 배송량, 배송지역에 따라 배송일이 추가로 소요될 수 있는 점 양해 부탁드립니다.',
  },
  isLike: false,
  isCart: false,
};

const failedToAddToCart = '장바구니에 추가하는 데 실패했습니다.';
const successToAddToCart =
  '장바구니에 추가하였습니다. 장바구니 페이지로 이동하시겠습니까?';
const failedToLike = '좋아요 설정을 하는 데 실패했습니다.';
const successToLike = '이 상품에 좋아요 설정을 합니다.';
const successToUnLike = '이 상품에 대해 좋아요 설정을 해제합니다.';
const statusCodeAlreadyAdded = 409;

const ProductDetail: FC = () => {
  const idx = Number(useParams().id);
  const history = useHistory();
  const [product, setProduct] = useState<ProductDetailGetResponseBody>(null);

  if (Number.isNaN(idx) || idx <= 0) {
    history.push('/404');
    return <></>;
  }

  useEffect(() => {
    productsApi
      .getProductDetail(idx)
      .then((result) => setProduct(result.data))
      .catch(() => history.push('/404'));
  }, [idx]);

  const onClickAddToCart = useCallback(() => {
    productsApi
      .postProductToCart(idx)
      .then(() => {
        setProduct({ ...product, isCart: true });
        confirm(successToAddToCart, () => history.push('/cart'));
      })
      .catch(() => {
        alert(failedToAddToCart);
      });
  }, [idx, product]);

  const onClickLike = useCallback(() => {
    if (product?.isLike) {
      productsApi
        .deleteProductFromLike(idx)
        .then(() => {
          setProduct({ ...product, isLike: false });
          alert(successToUnLike);
        })
        .catch(() => alert(failedToLike));
    } else {
      productsApi
        .postProductToLike(idx)
        .then(() => {
          setProduct({ ...product, isLike: true });
          alert(successToLike);
        })
        .catch((e: ErrorResponse) => {
          if (e.statusCode === statusCodeAlreadyAdded) {
            alert(successToLike);
            return;
          }
          alert(failedToLike);
        });
    }
  }, [idx, product]);

  return (
    <ProductDetailWrapper>
      <PrevPageButton>
        <PrevPageArrow />
      </PrevPageButton>
      <LeftSection />
      <LayoutDivider aria-hidden="true">
        <DivideLine />
      </LayoutDivider>
      <RightSection>
        {/* @TODO dummyProductInfo 대신 product 사용해야 함 */}
        <ProductDetailContainer
          product={dummyProductInfo}
          onClickAddToCart={onClickAddToCart}
          onClickLike={onClickLike}
        />
      </RightSection>
    </ProductDetailWrapper>
  );
};

export default ProductDetail;
