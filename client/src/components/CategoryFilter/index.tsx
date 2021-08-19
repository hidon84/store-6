import React, { useContext } from 'react';
import { FilterContext } from '~/pages/ProductList';
import { setCategory, setSearchValue } from '~/stores/productListModule';

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
  const { dispatch, ...state } = useContext(FilterContext);

  console.log(state);
  return (
    <div>
      <button
        type="button"
        onClick={() => dispatch(setCategory(CategoryType.Book))}
      >
        sdfsdfsdf
      </button>
    </div>
  );
};

export default CategoryFilter;
