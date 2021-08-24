import { render } from '@testing-library/react';
import 'jest-styled-components';

import Input from '~/components/common/Input';

describe('<Input />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
});
