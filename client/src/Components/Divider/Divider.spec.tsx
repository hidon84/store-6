import React from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Divider from '~/Components/Divider/Divider';

describe('<Button />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<Divider width="full" />);
    expect(container).toMatchSnapshot();
  });
});
