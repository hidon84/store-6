import 'jest-styled-components';
import { render } from '@testing-library/react';

import { BigGiftSVG, SmallGiftSVG } from '~/assets/index';
import Icon from '~/Components/Icon';

describe('<Icon />', () => {
  it('should render Small Icon same with snapshot', () => {
    const { container } = render(<Icon src={SmallGiftSVG} />);
    expect(container).toMatchSnapshot();
  });

  it('should render Big Icon same with snapshot', () => {
    const { container } = render(<Icon src={BigGiftSVG} />);
    expect(container).toMatchSnapshot();
  });
});
