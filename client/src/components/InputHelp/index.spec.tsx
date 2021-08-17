import React from 'react';
import styled from 'styled-components';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import InputHelp from '~/components/InputHelp';

describe('<InputHelp />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<InputHelp>비밀번호가 너무 짧아요</InputHelp>);
    expect(container).toMatchSnapshot();
  });
});
