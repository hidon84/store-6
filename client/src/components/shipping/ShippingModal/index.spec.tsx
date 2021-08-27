import { render } from '@testing-library/react';
import 'jest-styled-components';

import ShippingModal from './index';

// type ShipType = {
//   idx?: number;
//   name: string;
//   phone: string;
//   code: string;
//   address: string;
//   detailAddress: string;
//   selected?: number;
// };

describe('<ShippingModal />', () => {
  it('should render same with snapshot', () => {
    const handleModalClose = () => {};
    const handleWriteShipping = () => {};
    const handleUpdateShipping = () => {};
    const isWrite = true;
    const modifyItem = {
      idx: 1,
      name: 'test',
      phone: 'test',
      code: 'test',
      address: 'test',
      detailAddress: 'test',
      selected: 1,
    };

    const { container } = render(
      <ShippingModal
        handleModalClose={handleModalClose}
        handleWriteShipping={handleWriteShipping}
        handleUpdateShipping={handleUpdateShipping}
        isWrite={isWrite}
        modifyItem={modifyItem}
      />,
    );
    expect(container).toMatchSnapshot();
  });
});
