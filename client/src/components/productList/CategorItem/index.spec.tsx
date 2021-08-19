import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import CategoryItem from './index';

describe('<CategoryItem />', () => {
  it('should render same with snapshot', () => {
      const { container } = render(
        <CategoryItem idx={1} image="test" />,
    );
    expect(container).toMatchSnapshot();
  });
});
