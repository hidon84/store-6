import { FC } from 'react';

import { SpringSVG } from '~/assets';
import scrollToTop from '~/utils/scrollToTop';

import { ScrollToTopWrapper } from './index.style';

const ScrollToTop: FC<{ isVisible: boolean }> = ({ isVisible }) => {
  const moveToTop = scrollToTop({ behavior: 'smooth' });
  return (
    <ScrollToTopWrapper onClick={moveToTop} isVisible={isVisible}>
      <img src={SpringSVG} alt="scroll-to-top" />
    </ScrollToTopWrapper>
  );
};

export default ScrollToTop;
