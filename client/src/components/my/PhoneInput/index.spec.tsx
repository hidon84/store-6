import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import PhoneInput from './index';

describe('<PhoneInput />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<PhoneInput />);
    expect(container).toMatchSnapshot();
  });
});
