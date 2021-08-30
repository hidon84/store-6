import { render, fireEvent } from '@testing-library/react';
import 'jest-styled-components';

import UserInfoInput from './index';

describe('<UserInfoInput />', () => {
  it('should render same with snapshot', () => {
    const { container } = render(
      <UserInfoInput title="test" inputComponent={() => {}} />,
    );
    expect(container).toMatchSnapshot();
  });

  it('should be 수정 when defaultDisabled is true', () => {
    const { getByText } = render(
      <UserInfoInput title="test" defaultDisabled inputComponent={() => {}} />,
    );

    getByText('수정');
  });

  it('should be 수정 when defaultDisabled is false', () => {
    const { getByText } = render(
      <UserInfoInput
        title="test"
        defaultDisabled={false}
        inputComponent={() => {}}
      />,
    );

    getByText('완료');
  });

  it('should be 완료 after modify button is clicked', () => {
    const { getByText } = render(
      <UserInfoInput title="test" defaultDisabled inputComponent={() => {}} />,
    );

    fireEvent.click(getByText('수정'));

    getByText('완료');
  });

  it('onSubmit should be called after complete button is clicked', () => {
    let isSubmited = false;
    const { getByText } = render(
      <UserInfoInput
        title="test"
        onSubmit={() => {
          isSubmited = true;
        }}
        defaultDisabled={false}
        inputComponent={() => {}}
      />,
    );

    fireEvent.click(getByText('완료'));

    expect(isSubmited).toBeTruthy();
  });

  it('showWarning should be called when validator returns false', () => {
    let isCalledShowWarning = false;
    const { getByText } = render(
      <UserInfoInput
        title="test"
        validator={() => false}
        showWarning={() => {
          isCalledShowWarning = true;
        }}
        defaultDisabled={false}
        inputComponent={() => {}}
      />,
    );

    fireEvent.click(getByText('완료'));

    expect(isCalledShowWarning).toBeTruthy();
  });

  it('complete button should be enabled when onSubmit is called and validator returns true', () => {
    const { getByText } = render(
      <UserInfoInput
        title="test"
        value=""
        validator={() => true}
        onSubmit={() => {}}
        defaultDisabled={false}
        inputComponent={() => {}}
      />,
    );

    const completeButton = getByText('완료');
    fireEvent.click(completeButton);

    expect(completeButton).toBeEnabled();
  });
});
