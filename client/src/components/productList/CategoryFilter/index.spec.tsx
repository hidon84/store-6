import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import CategoryFilter from './index';

describe('<CategoryFilter />', () => {
  it('should render same with snapshot', () => {
      const { container } = render(
        <CategoryFilter/>,
    );
    expect(container).toMatchSnapshot();
  });
});
