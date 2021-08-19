import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import UserInfoInput from './index';

describe('<UserInfoInput />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(
      <UserInfoInput title="test" inputComponent={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });
});
