/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import React, { useContext } from 'react';
import { FilterContext } from '~/pages/ProductList';
import { resetCategory } from '~/stores/productListModule';
import {
  CategoryFilterWrapper,
  CategoryHeder,
  CategoryContainer,
} from './index.style';

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
  RefreshSVG,
} from '~/assets';

import CategoryItem from '../CategorItem';

enum CategoryType {
  Book = 1,
  Stationery,
  Living,
  Green,
  Baedal,
  Kkk,
  Ulgiro,
  Gift,
  Collaboration,
}

const CategoryFilter: React.FC = () => {
  const { dispatch, ...currentState } = useContext(FilterContext);

  const handleResetBtnClick = () => {
    dispatch(resetCategory());
  };

  return (
    <CategoryFilterWrapper>
      <CategoryHeder>
        <div>카테고리</div>
        <img onClick={handleResetBtnClick} src={RefreshSVG} alt="reset" />
      </CategoryHeder>
      <CategoryContainer>
        <CategoryItem idx={CategoryType.Book} image={BigBookSVG} />
        <CategoryItem idx={CategoryType.Stationery} image={SmallPencilSVG} />
        <CategoryItem idx={CategoryType.Living} image={SmallHouseSVG} />
        <CategoryItem idx={CategoryType.Green} image={SmallTreeSVG} />
        <CategoryItem idx={CategoryType.Baedal} image={SmallBaedalSVG} />
        <CategoryItem idx={CategoryType.Kkk} image={SmallKKSVG} />
        <CategoryItem idx={CategoryType.Ulgiro} image={Hat2SVG} />
        <CategoryItem idx={CategoryType.Gift} image={SmallGiftSVG} />
        <CategoryItem idx={CategoryType.Collaboration} image={SmallColabSVG} />
      </CategoryContainer>
    </CategoryFilterWrapper>
  );
};

export default CategoryFilter;
