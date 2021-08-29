import React from 'react';

import S from './index.style';

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
import CategoryItem from '~/components/productList/CategoryItem';

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
  <S.CategoryFilterWrapper>
    <S.CategoryHeader>
      <div>카테고리</div>
    </S.CategoryHeader>
    <S.CategoryContainer>
      {Categorys.map((item, index) => (
        <CategoryItem key={item} idx={index + 1} image={item} />
      ))}
    </S.CategoryContainer>
  </S.CategoryFilterWrapper>
);

export default CategoryFilter;
