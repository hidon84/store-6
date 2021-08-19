/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */

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

import CategoryItem from '../CategoryItem';

const Categorys = [
  BigBookSVG,
  SmallPencilSVG,
  SmallHouseSVG,
  SmallTreeSVG,
  SmallBaedalSVG,
  SmallKKSVG,
  Hat2SVG,
  SmallGiftSVG,
  SmallColabSVG,
];


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
        {Categorys.map((item, index) => (
          <CategoryItem key={index} idx={index + 1} image={item} />
        ))}
      </CategoryContainer>
    </CategoryFilterWrapper>
  );
};

export default CategoryFilter;
