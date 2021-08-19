import React, { useContext } from 'react';
import styled from 'styled-components';
import { FilterContext } from '~/pages/ProductList';
import { setCategory, setSearchValue } from '~/stores/productListModule';

import {
  BigBookSVG,
  SmallPencilSVG,
  SmallBaedalSVG,
  SmallColabSVG,
  SmallGiftSVG,
  Hat2SVG,
  SmallHouseSVG,
  SmallKKSVG,
  SmallTreeSVG,
  SmallCircleSVG,
  RefreshSVG,
} from '~/assets';

enum CategoryType {
  Book,
  Stationery,
  Living,
  Green,
  Baedal,
  Kkk,
  Ulgiro,
  Collaboration,
  Gift,
}

const CategoryFilterWrapper = styled.div``;

const CategoryHeder = styled.div`
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 33px;
  img {
    width: 25px;
  }
`;

const ImageWrapper = styled.div`
  img {
    place-self: center;
    width: 55px;
  }

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
`;

const CategoryFilter: React.FC = () => {
  const { dispatch, ...state } = useContext(FilterContext);

  return (
    <CategoryFilterWrapper>
      <CategoryHeder>
        <div>카테고리</div>
        <img src={RefreshSVG} alt="category" />
      </CategoryHeder>
      <ImageWrapper>
        <img src={BigBookSVG} alt="category" />
        <img src={SmallPencilSVG} alt="category" />
        <img src={SmallHouseSVG} alt="category" />
        <img src={SmallTreeSVG} alt="category" />
        <img src={SmallBaedalSVG} alt="category" />
        <img src={SmallKKSVG} alt="category" />
        <img src={Hat2SVG} alt="category" />
        <img src={SmallGiftSVG} alt="category" />
        <img src={SmallColabSVG} alt="category" />
      </ImageWrapper>
    </CategoryFilterWrapper>
  );
};

export default CategoryFilter;
