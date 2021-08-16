import React from 'react';
import { render, screen } from '@testing-library/react';
import 'jest-styled-components';

import App from '~/App';

describe('<App />', () => {
  it('should render component in document', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });

  /**
   * toMatchInlineSnapshot 안에 있는 내용은 프로그래머가 직접 작성하지 않습니다.
   * 안에 인자를 비워두고 실행하면 내부의 스트링을 jest가 자동으로 완성시켜줍니다.
   * Snapshot을 비교해서 ui가 얼마나 바뀌는지 확인할 수 있습니다.
   */
  it('should route /', () => {
    const { container } = render(<App />);
    expect(container).toMatchInlineSnapshot(`
.c0 {
  height: 100%;
  width: 1156px;
}

<div>
  <main
    class="c0"
  >
    <div>
      No Matching Route
    </div>
  </main>
</div>
`);
  });
});
