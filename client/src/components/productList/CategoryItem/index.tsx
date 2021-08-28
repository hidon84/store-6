import React, { useContext, useEffect, useRef } from 'react';

import { startFetch } from '~/stores/fetchModule';
import { setCategory } from '~/stores/productListModule';

import FetchContext from '~/lib/contexts/fetchContext';
import FilterContext from '~/lib/contexts/filterContext';

import { ImageContainer } from './index.style';

interface Props {
  idx: number;
  image: string;
}

const CategoryItem: React.FC<Props> = ({ idx, image }) => {
  const { dispatch: filterDispatch, ...currentState } =
    useContext(FilterContext);
  const { dispatch: fetchDispatch } = useContext(FetchContext);

  const handleImgClick = () => {
    filterDispatch(setCategory(idx));
    fetchDispatch(startFetch());
  };

  const ImagContainer = useRef();

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
