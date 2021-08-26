import React, { FC, useState } from 'react';
import { SmallCircleSVG } from '~/assets';
import { IconWrapper, Circle } from './index.style';

/**
 *
 * @param src assets 의 small, big 아이콘을 넣어줍니다.
 * 만약, Big icon일 경우 hover 했을 시 큰 원이 보이게 되며, small 일 경우 작은 원이 보입니다.
 * @example
 * <Icon src=${SmallGiftSVG}/>
 */
const Icon: FC<{ src: string }> = ({ src }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <IconWrapper onMouseLeave={() => setIsHovered(false)}>
      <img src={src} alt="icon" onMouseEnter={() => setIsHovered(true)} />
      {!isHovered && <Circle src={SmallCircleSVG} alt="" />}
    </IconWrapper>
  );
};

export default Icon;
