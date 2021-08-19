import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import MyPage from './index';

describe('<MyPage />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<MyPage />);
    expect(container).toMatchSnapshot();
  });
});
