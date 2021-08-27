import { render } from '@testing-library/react';
import 'jest-styled-components';

import ShippingItem from './index';

describe('<ShippingItem />', () => {
  it('should render same with snapshot', () => {
    const changeSelectedBtn = () => {};
    const removeShippingItem = () => {};
    const modifyBtnClick = () => {};
    const selected = true;
    const shipItem = {
      idx: 1,
      name: 'test',
      phone: 'test',
      code: 'test',
      address: 'test',
      detailAddress: 'test',
      selected: 1,
    };

    const { container } = render(
      <ShippingItem
        changeSelectedBtn={changeSelectedBtn}
        removeShippingItem={removeShippingItem}
        modifyBtnClick={modifyBtnClick}
        selected={selected}
        shipItem={shipItem}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
