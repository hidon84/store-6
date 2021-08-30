import { useEffect } from 'react';
import ProductDetail from '~/components/productDetail/ProductDetail';
import ProductList from '~/components/productList/ProductList';
import { useHistory, useLocation, useParams } from '~/core/Router';
import CATEGORY_TO_IDX from '~/lib/constants/categories';
import productListModule, { setCategory } from '~/stores/productFilterModule';

const ProductPage = () => {
  const location = useLocation();
  const { replace } = useHistory();
  const { dispatch: productFilterDispatch } = productListModule();
  const idx = useParams()?.id;
  const idxNumber = Number(idx);

  useEffect(() => {
    if (location.state?.from === '/') {
      productFilterDispatch(
        setCategory(CATEGORY_TO_IDX[location.state?.category]),
      );
      replace(location.pathname, {});
    }
  }, [location.state]);

  if (idx) {
    return <ProductDetail idx={idxNumber} />;
  }
  return <ProductList />;
};

export default ProductPage;
