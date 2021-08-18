import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import MainPage from './index';

describe('<MainPage />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<MainPage />);
    expect(container).toMatchSnapshot();
  });
});
