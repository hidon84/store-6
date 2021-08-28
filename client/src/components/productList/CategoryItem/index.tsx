import React, { useContext, useEffect, useRef } from 'react';

import { FetchContext, FilterContext } from '~/pages/ProductList';

import { startFetch } from '~/stores/fetchModule';
import { resetCategory, setCategory } from '~/stores/productListModule';

import scrollToTop from '~/utils/scrollToTop';

import { ImageContainer } from './index.style';

interface Props {
  idx: number;
  image: string;
}

const CategoryItem: React.FC<Props> = ({ idx, image }) => {
  const ImagContainer = useRef();
  const { dispatch: filterDispatch, ...currentState } =
    useContext(FilterContext);
  const { dispatch: fetchDispatch } = useContext(FetchContext);

  const handleImgClick = () => {
    if (idx === 10) filterDispatch(resetCategory());
    else filterDispatch(setCategory(idx));
    fetchDispatch(startFetch());
    scrollToTop({ behavior: 'auto' });
  };

  useEffect(() => {
    const node = ImagContainer.current as HTMLElement;
    if (idx === currentState.state.category) {
      node.classList.add('selected');
    } else {
      node.classList.remove('selected');
    }
  });

  return (
    <ImageContainer onClick={handleImgClick} ref={ImagContainer}>
      <img src={image} alt="category" />
    </ImageContainer>
  );
};

export default CategoryItem;
