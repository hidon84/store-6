import React, { FC, useState } from 'react';
import { SmallCircleSVG, BigCircleSVG } from '~/assets/index';
import { IconWrapper, Circle } from './index.style';

const BigIconPrefix =
  'https:/store-6-bucket.s3.ap-northeast-2.amazonaws.com/common/big';

/**
 *
 * @param src assets/index.tsx 의 small, big 아이콘을 넣어줍니다.
 * 만약, Big icon일 경우 hover 했을 시 큰 원이 보이게 되며, small 일 경우 작은 원이 보입니다.
 * @example
 * <Icon src=${SmallGiftSVG}/>
 */
const Icon: FC<{ src: string }> = ({ src }) => {
  const isBig = src.startsWith(BigIconPrefix);
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <IconWrapper onMouseLeave={() => setIsHovered(false)}>
      <img src={src} alt="icon" onMouseEnter={() => setIsHovered(true)} />
      {!isHovered && isBig && <Circle src={BigCircleSVG} alt="" />}
      {!isHovered && !isBig && <Circle src={SmallCircleSVG} alt="" />}
    </IconWrapper>
  );
};

export default Icon;
