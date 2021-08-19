import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import ProductItem from './index';

describe('<ProductItem />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(
      <ProductItem idx={1} thumbnail="test" title="test" price="2000" />,
    );
    expect(container).toMatchSnapshot();
  });
});
