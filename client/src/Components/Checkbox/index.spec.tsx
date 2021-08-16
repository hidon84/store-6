import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Checkbox from '~/Components/Checkbox';

describe('<Button />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<Checkbox checked />);
    expect(container).toMatchSnapshot();
  });

  it('should render same with unchecked checkbox snapshot', () => {
    const { container } = render(<Checkbox />);
    expect(container).toMatchSnapshot();
  });
});
