import { render } from '@testing-library/react';
import 'jest-styled-components';

import Copyright from '~/components/base/Copyright';

describe('<Copyright />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(<Copyright>저작권 관련 내용</Copyright>);
    expect(container).toMatchSnapshot();
  });
});
