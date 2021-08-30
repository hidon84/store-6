import React, { useContext, useEffect, useState } from 'react';

import FetchContext from '~/lib/contexts/fetchContext';
import FilterContext from '~/lib/contexts/filterContext';

import { startFetch } from '~/stores/fetchModule';
import { resetCategory, setCategory } from '~/stores/productListModule';

import scrollToTop from '~/utils/scrollToTop';

import S from './index.style';

interface Props {
  idx: number;
  image: string;
}

const CategoryItem: React.FC<Props> = ({ idx, image }) => {
  const { state: filterState, dispatch: filterDispatch } =
    useContext(FilterContext);
  const { dispatch: fetchDispatch } = useContext(FetchContext);
  const [isSelected, setIsSelected] = useState(false);

  const handleImgClick = () => {
    if (idx === 10) filterDispatch(resetCategory());
    else filterDispatch(setCategory(idx));
    fetchDispatch(startFetch());
    scrollToTop({ behavior: 'auto' });
  };

  useEffect(() => {
    const isSelectedCategory = idx === filterState.category;
    const isCategoryAll = idx === 10 && !filterState.category;
    setIsSelected(isSelectedCategory || isCategoryAll);
  }, [idx, filterState]);

  return (
    <S.ImageContainer onClick={handleImgClick} isSelected={isSelected}>
      <img src={image} alt="category" />
    </S.ImageContainer>
  );
};

export default CategoryItem;
