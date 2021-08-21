import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Cart from './index';

describe('<Cart />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<Cart />);
    expect(container).toMatchSnapshot();
  });
});
