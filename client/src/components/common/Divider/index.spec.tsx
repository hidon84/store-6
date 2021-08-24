import { render } from '@testing-library/react';
import 'jest-styled-components';

import Divider from '~/components/common/Divider';

describe('<Divider />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<Divider />);
    expect(container).toMatchSnapshot();
  });
});
