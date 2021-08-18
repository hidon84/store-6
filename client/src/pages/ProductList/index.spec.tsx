import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import ProductList from './index';

describe('<ProductList />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<ProductList />);
    expect(container).toMatchSnapshot();
  });
});
