import { useEffect } from 'react';
import ProductDetail from '~/components/productDetail/ProductDetail';
import ProductList from '~/components/productList/ProductList';
import { useHistory, useLocation, useParams } from '~/core/Router';
import CATEGORY_TO_IDX from '~/lib/constants/categories';
import FilterContext from '~/lib/contexts/filterContext';
import productListModule, { setCategory } from '~/stores/productListModule';

const ProductPage = () => {
  const location = useLocation();
  const { replace } = useHistory();
  const { state: filterState, dispatch: productFilterDispatch } =
    productListModule();
  const idx = useParams()?.id;
  let idxNumber = Number(idx);

  useEffect(() => {
    if (location.state?.from === '/') {
      productFilterDispatch(
        setCategory(CATEGORY_TO_IDX[location.state?.category]),
      );
      replace(location.pathname, {});
    }
  }, [location.state]);

  return (
    <FilterContext.Provider
      value={{ state: filterState, dispatch: productFilterDispatch }}
    >
      {idx ? <ProductDetail idx={idxNumber} /> : <ProductList />}
    </FilterContext.Provider>
  );
};

export default ProductPage;
