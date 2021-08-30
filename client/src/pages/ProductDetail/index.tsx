import {
  FC,
  useEffect,
  useState,
  useCallback,
  useRef,
  useContext,
} from 'react';
import ProductDetailContainer from '~/components/productDetail/ProductDetailContainer';
import { useHistory, useParams } from '~/core/Router';
import { ErrorResponse, ProductDetailGetResponseBody } from '~/lib/api/types';
import * as productsApi from '~/lib/api/products';
import S from './index.style';
import { alert, confirm } from '~/utils/modal';
import useSetCartAmount from '~/lib/hooks/useSetCartAmount';
import ProductRecommendContainer from '~/components/productDetail/ProductRecommend';
import ProductDetailImages from '~/components/productDetail/ProductDetailImages';
import UserContext from '~/lib/contexts/userContext';
import NoMatchingRoute from '~/components/common/NoMatchingRoute';

const message = {
  failedToGetProductDetail: '상품 정보를 불러오는 데 실패했습니다',
  failedToAddToCart: '장바구니에 추가하는 데 실패했습니다.',
  successToAddToCart: `장바구니에 추가하였습니다. 
    장바구니 페이지로 이동하시겠습니까?`,
  failedToLike: '좋아요 설정을 하는 데 실패했습니다.',
  needLogin: `로그인이 필요한 서비스입니다. 
  로그인 페이지로 이동하시겠습니까?`,
  successToLike: '이 상품에 좋아요 설정을 합니다.',
  successToUnLike: '이 상품에 대해 좋아요 설정을 해제합니다.',
};

const statusCodeAlreadyAdded = 409;

const ProductDetailPage: FC = () => {
  const { user: userState } = useContext(UserContext);
  const setCartAmount = useSetCartAmount();
  const idx = Number(useParams()?.id);
  const isIdxValid = !(Number.isNaN(idx) || idx <= 0);
  const history = useHistory();
  const [isNotFound, setIsNotFound] = useState(false);
  const [product, setProduct] = useState<ProductDetailGetResponseBody>(null);
  const imagesContainerRef = useRef<HTMLDivElement>();
  const scrollProgressRef = useRef<HTMLImageElement>();

  useEffect(() => {
    const scrollImagesWhenWheel = (e: WheelEvent) => {
      if (!imagesContainerRef.current) return;
      imagesContainerRef.current.scrollBy({
        top: e.deltaY,
        left: 0,
      });

      if (!scrollProgressRef.current) return;
      const maxScrollHeight =
        imagesContainerRef.current.scrollHeight -
        imagesContainerRef.current.clientHeight;
      const currentScrollPos = imagesContainerRef.current.scrollTop;
      const scrollProgress = currentScrollPos / maxScrollHeight;
      scrollProgressRef.current.style.top = S.scrollProgressTop(scrollProgress);
    };

    document.addEventListener('wheel', scrollImagesWhenWheel);
    return () => document.removeEventListener('wheel', scrollImagesWhenWheel);
  }, []);

  useEffect(() => {
    if (!isIdxValid) {
      alert(message.failedToGetProductDetail);
      return;
    }

    if (!userState.error && !userState.isLoggedIn) return;

    if (userState.user) {
      productsApi.postProductToView(idx).catch(() => {});
    }

    productsApi
      .getProductDetail(idx)
      .then((result) => setProduct(result.data))
      .catch(() => setIsNotFound(true));
  }, [idx, userState.isLoggedIn, userState.error]);

  const onClickAddToCart = useCallback(() => {
    if (!userState.isLoggedIn) {
      confirm(message.needLogin, () => history.push('/login'));
      return;
    }
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
    if (!userState.isLoggedIn) {
      confirm(message.needLogin, () => history.push('/login'));
      return;
    }
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

  const goPrevPage = useCallback(() => history.goBack(), [history]);

  if (isNotFound) return <NoMatchingRoute />;
  if ((!userState.error && !userState.isLoggedIn) || product === null)
    return null;
  const { thumbnail, images } = product;

  return (
    <S.ProductDetailWrapper>
      <S.PrevPageButton onClick={goPrevPage}>
        <S.PrevPageArrow />
      </S.PrevPageButton>

      <S.LeftSection ref={imagesContainerRef}>
        <ProductDetailImages thumbnail={thumbnail} images={images} />
      </S.LeftSection>

      <S.LayoutDivider aria-hidden="true">
        <S.DivideLine />
        <S.ScrollProgressWrapper>
          <S.ScrollProgress ref={scrollProgressRef} />
        </S.ScrollProgressWrapper>
      </S.LayoutDivider>

      <S.RightSection>
        <ProductDetailContainer
          product={product}
          onClickAddToCart={onClickAddToCart}
          onClickLike={onClickLike}
        />
        <ProductRecommendContainer products={product.recommend} />
      </S.RightSection>
    </S.ProductDetailWrapper>
  );
};

export default ProductDetailPage;
