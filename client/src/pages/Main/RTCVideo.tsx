/* eslint-disable jsx-a11y/media-has-caption */
import { FC, useRef, useEffect, memo } from 'react';
import { Video } from './index.style';

const RTCAudio: FC<{ id: string; stream: MediaStream }> = ({ id, stream }) => {
  const audioRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.srcObject = stream ?? null;
  });

  return (
    <figure>
      <figcaption>{id.slice(0, 8)}</figcaption>
      <Video ref={audioRef} autoPlay controls />
    </figure>
  );
};

export default memo(RTCAudio);
