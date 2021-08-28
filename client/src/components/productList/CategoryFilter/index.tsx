/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-array-index-key */

import React, { useContext } from 'react';
import { FetchContext, FilterContext } from '~/pages/ProductList';
import { resetCategory } from '~/stores/productListModule';
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
  RefreshSVG,
  SmallBookSVG,
  CategoryAllSVG,
} from '~/assets';

import CategoryItem from '../CategoryItem';
import { startFetch } from '~/stores/fetchModule';
import scrollToTop from '~/utils/scrollToTop';

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
  const { dispatch } = useContext(FilterContext);
  const { dispatch: fetchDispatch } = useContext(FetchContext);
  const handleResetBtnClick = () => {
    dispatch(resetCategory());
    fetchDispatch(startFetch());
    scrollToTop({ behavior: 'auto' });
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
