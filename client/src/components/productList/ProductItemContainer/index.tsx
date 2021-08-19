import { FC } from 'react';

import styled from 'styled-components';
import ProductItem from '~/components/ProductItem';
import { ProductData } from '~/pages/ProductList';

const ProductItemContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 31px;
  padding-left: 7px;
`;

interface Props {
  products: ProductData[];
}

const ProductItemContainer: FC<Props> = ({ products }) => {
  console.log(products);

  return (
    <ProductItemContainerWrapper>
      {products.map(({ idx, thumbnail, price, title }) => (
        <ProductItem
          key={idx}
          thumbnail={thumbnail}
          price={price}
          title={title}
        />
      ))}
    </ProductItemContainerWrapper>
  );
};

export default ProductItemContainer;
