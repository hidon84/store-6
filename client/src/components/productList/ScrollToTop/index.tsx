import { FC, useCallback } from 'react';

import { SpringSVG } from '~/assets';
import { ScrollToTopWrapper } from './index.style';

const ScrollToTop: FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const moveToTop = useCallback(
    () => window.scrollTo({ top: 0, behavior: 'smooth' }),
    [],
  );
  return (
    <ScrollToTopWrapper onClick={moveToTop} isVisible={isVisible}>
      <img src={SpringSVG} alt="scroll-to-top" />
    </ScrollToTopWrapper>
  );
};

export default ScrollToTop;
