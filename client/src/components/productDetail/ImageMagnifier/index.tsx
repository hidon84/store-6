import React, { FC, useState, useCallback, useRef } from 'react';
import getCursorPos from '~/utils/getCursorPos';
import { StyledMagnifier, StyledImageMagnifier } from './index.style';

interface IProps {
  imageSrc: string;
  imageAlt: string;
  zoom?: number;
}

const magnifierWidth = 200;
const magnifierHeight = 200;

const ImageMagnifier: FC<IProps> = ({ imageSrc, imageAlt, zoom = 3 }) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [magnifierShow, setMagnifierShow] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const [magnifierPos, setMagnifierPos] = useState({
    pos: { x: 0, y: 0 },
    imagePos: '0px 0px',
  });

  const imageOnLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const imageTarget = e.target as HTMLImageElement;
    const { width } = imageTarget;
    const { height } = imageTarget;
    setImageSize({ width, height });
  };

  const showMagnifier = useCallback(
    () => setMagnifierShow(true),
    [setMagnifierShow],
  );
  const hideMagnifier = useCallback(
    () => setMagnifierShow(false),
    [setMagnifierShow],
  );

  const magnify = useCallback(
    (e: React.MouseEvent) => {
      const { x: mouseX, y: mouseY, maxX, maxY } = getCursorPos(e, imgRef);

      if (mouseX < -magnifierWidth / 2 || mouseX >= maxX) hideMagnifier();
      else if (mouseY < 0 || mouseY >= maxY + magnifierHeight / 2)
        hideMagnifier();
      else showMagnifier();

      const rx = -(mouseX * zoom - magnifierWidth / 2);
      const ry = -(mouseY * zoom - magnifierHeight / 2);

      const px = mouseX - magnifierWidth / 2;
      const py = mouseY - magnifierHeight / 2;

      setMagnifierPos({
        pos: {
          x: px >= -magnifierWidth / 2 ? px : -magnifierWidth / 2,
          y: py >= -magnifierHeight / 2 ? py : -magnifierHeight / 2,
        },
        imagePos: `${rx}px ${ry}px`,
      });
    },
    [zoom],
  );

  return (
    <StyledImageMagnifier
      onMouseMove={magnify}
      onMouseEnter={showMagnifier}
      onMouseLeave={hideMagnifier}
    >
      <img
        width="100%"
        src={imageSrc}
        alt={imageAlt}
        onLoad={imageOnLoad}
        ref={imgRef}
        referrerPolicy="no-referrer"
      />
      <StyledMagnifier
        width={magnifierWidth}
        height={magnifierHeight}
        imageSrc={imageSrc}
        show={magnifierShow}
        style={{
          left: magnifierPos.pos.x,
          top: magnifierPos.pos.y,
          backgroundPosition: magnifierPos.imagePos,
          backgroundSize: `${imageSize.width * zoom}px ${
            imageSize.height * zoom
          }px`,
        }}
      />
    </StyledImageMagnifier>
  );
};

export default ImageMagnifier;
