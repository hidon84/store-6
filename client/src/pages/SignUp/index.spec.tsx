import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import SignUpPage from './index';

describe('<SignUpPage />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<SignUpPage />);
    expect(container).toMatchSnapshot();
  });
});
