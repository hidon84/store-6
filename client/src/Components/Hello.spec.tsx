import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import Hello from './Hello';

describe('<Hello />', () => {
  it('should render component in document', () => {
    const { container } = render(<Hello />);
    expect(container).toBeInTheDocument();
  });

  /**
   * toMatchInlineSnapshot 안에 있는 내용은 프로그래머가 직접 작성하지 않습니다.
   * 안에 인자를 비워두고 실행하면 내부의 스트링을 jest가 자동으로 완성시켜줍니다.
   * Snapshot을 비교해서 ui가 얼마나 바뀌는지 확인할 수 있습니다.
   */
  it('should matche snapshot', () => {
    const { container } = render(<Hello />);
    expect(container).toMatchInlineSnapshot(`
.c0 {
  cursor: pointer;
}

<div>
  <a
    class="c0"
    href="/world"
  >
    goto world
  </a>
</div>
`);
  });

  it('should contain text goto world', () => {
    const { getByText } = render(<Hello />);
    expect(getByText('goto world')).toBeInTheDocument();
  });
});
