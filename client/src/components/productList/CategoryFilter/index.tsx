import React from 'react';

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

const CategoryFilter: React.FC = () => (
  <CategoryFilterWrapper>
    <CategoryHeder>
      <div>카테고리</div>
    </CategoryHeder>
    <CategoryContainer>
      {Categorys.map((item, index) => (
        <CategoryItem key={item} idx={index + 1} image={item} />
      ))}
    </CategoryContainer>
  </CategoryFilterWrapper>
);

export default CategoryFilter;
