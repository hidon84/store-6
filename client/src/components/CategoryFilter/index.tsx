import React, { useContext } from 'react';
import { FilterContext } from '~/pages/ProductList';
import styled from 'styled-components';
import { setCategory, setSearchValue } from '~/stores/productListModule';

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
  RefreshSVG
} from '~/assets';


const CategoryFilterWrapper = styled.div`

`

const CategoryHeder = styled.div`
  font-size: 25px;
  display: flex;
  align-items : center;
  justify-content: space-between;
  margin-bottom: 33px;
  img{
    width: 25px;
  }
`


const ImageWrapper = styled.div`
  img{
    place-self: center;
    width: 55px;
  }

  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 25px;
`


const CategoryFilter: React.FC = () => {
  const { dispatch, ...state } = useContext(FilterContext);

  return (
    <CategoryFilterWrapper>
      <CategoryHeder>
        <div>카테고리</div>
        <img src={RefreshSVG} />
      </CategoryHeder>
      <ImageWrapper>
          <img src={BigBookSVG} />
          <img src={SmallPencilSVG} />
          <img src={SmallHouseSVG} />
          <img src={SmallTreeSVG} />
          <img src={SmallBaedalSVG} />
          <img src={SmallKKSVG} />
          <img src={Hat2SVG} />
          <img src={SmallGiftSVG} />
          <img src={SmallColabSVG}/>
      </ImageWrapper>
    </CategoryFilterWrapper>
  );
};

export default CategoryFilter;