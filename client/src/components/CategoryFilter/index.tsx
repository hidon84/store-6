import React, { useContext } from 'react';
import { FilterContext } from '~/pages/ProductList';

enum CategoryType {
  Book,
  Stationery,
  Living,
  Green,
  Baedal,
  Kkk,
  Ulgiro,
  Collaboration,
  Gift,
}

const CategoryFilter: React.FC = () => {
  const { setCategory, ...state } = useContext(FilterContext);

  return (
    <div>
      <button type="button" onClick={() => setCategory(CategoryType.Gift)}>
        sdfsdfsdf
      </button>
    </div>
  );
};

export default CategoryFilter;
