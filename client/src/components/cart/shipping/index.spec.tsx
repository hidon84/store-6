import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Shipping from './index';

describe('<Shipping />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<Shipping />);
    expect(container).toMatchSnapshot();
  });
});
