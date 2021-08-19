import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import EmailInput from './index';

describe('<EmailInput />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<EmailInput />);
    expect(container).toMatchSnapshot();
  });
});
