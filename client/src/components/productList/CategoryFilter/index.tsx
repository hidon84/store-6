/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */

import React, { useContext } from 'react';
import { FetchContext, FilterContext } from '~/pages/ProductList';
import {
  CategoryFilterWrapper,
  CategoryHeder,
  CategoryContainer,
} from './index.style';

import {
  SmallPencilSVG,
  SmallBaedalSVG,
  SmallColabSVG,
  SmallGiftSVG,
  Hat2SVG,
  SmallHouseSVG,
  SmallKKSVG,
  SmallTreeSVG,
  SmallBookSVG,
  CategoryAllSVG,
} from '~/assets';

import CategoryItem from '../CategoryItem';

const Categorys = [
  SmallBookSVG,
  SmallPencilSVG,
  SmallHouseSVG,
  SmallTreeSVG,
  SmallBaedalSVG,
  SmallKKSVG,
  Hat2SVG,
  SmallGiftSVG,
  SmallColabSVG,
  CategoryAllSVG,
];

const CategoryFilter: React.FC = () => {
  // const handleResetBtnClick = () => {
  //   dispatch(resetCategory());
  //   fetchDispatch(startFetch());
  //   scrollToTop({ behavior: 'auto' });
  // };

  return (
    <CategoryFilterWrapper>
      <CategoryHeder>
        <div>카테고리</div>
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
