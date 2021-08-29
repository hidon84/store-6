/* eslint-disable jsx-a11y/media-has-caption */
import { FC, useRef, useEffect, memo } from 'react';
import { MirroredVideo, Video } from './index.style';

const RTCAudio: FC<{ id: string; stream: MediaStream; me?: boolean }> = ({
  id,
  stream,
  me,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!videoRef.current) return;
    videoRef.current.srcObject = stream ?? null;
  });

  return (
    <figure>
      <figcaption>{id.slice(0, 8)}</figcaption>
      {me ? (
        <MirroredVideo ref={videoRef} autoPlay muted />
      ) : (
        <Video ref={videoRef} autoPlay controls />
      )}
    </figure>
  );
};

export default memo(RTCAudio);
