import React from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Input from '~/Components/Input';

describe('<Button />', () => {
  it('should render component in document', () => {
    const { container } = render(<Input />);
    expect(container).toBeInTheDocument();
  });

  it('should render same with snapshot', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
});
