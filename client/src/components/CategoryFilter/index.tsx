import React, { useContext ,useState } from 'react';
import { FilterContext } from '~/pages/ProductList';
import styled from 'styled-components';


enum CategoryType {
  Book=1,
  Stationery,
  Living,
  Green,
  Baedal,
  Kkk,
  Ulgiro,
  Gift,
  Collaboration,
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
  RefreshSVG,
} from '~/assets';
import CategoryItem from '../CategorItem';


const CategoryFilterWrapper = styled.div`
  img{
    cursor: pointer;
  }
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
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`

const CategoryFilter: React.FC = () => {

  return (
    <CategoryFilterWrapper>
      <CategoryHeder>
        <div>카테고리</div>
        <img src={RefreshSVG} />
      </CategoryHeder>
      <ImageWrapper>
        <CategoryItem idx={CategoryType.Book} image={BigBookSVG}/>
        <CategoryItem idx={CategoryType.Stationery} image={SmallPencilSVG}/>
        <CategoryItem idx={CategoryType.Living} image={SmallHouseSVG}/>
        <CategoryItem idx={CategoryType.Green} image={SmallTreeSVG}/>
        <CategoryItem idx={CategoryType.Baedal} image={SmallBaedalSVG}/>
        <CategoryItem idx={CategoryType.Kkk} image={SmallKKSVG}/>
        <CategoryItem idx={CategoryType.Ulgiro} image={Hat2SVG}/>
        <CategoryItem idx={CategoryType.Gift} image={SmallGiftSVG}/>
        <CategoryItem idx={CategoryType.Collaboration} image={SmallColabSVG}/>
      </ImageWrapper>
    </CategoryFilterWrapper>
  );
};

export default CategoryFilter;




