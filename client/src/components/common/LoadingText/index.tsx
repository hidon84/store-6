import { FC, useEffect, useState } from 'react';

import { LoadingTextWrapper, Text, TextArea } from './index.style';
import { PHRASES } from './phrases';

const getRandomIdx = (max: number = PHRASES.length): number => {
  return Math.floor(Math.random() * max);
};

const LoadingText: FC<{ isFetching: boolean }> = ({ isFetching }) => {
  const [phrase, setPhrase] = useState(PHRASES[getRandomIdx()]);

  /**
   * Fetching이 끝날 경우, 다음 Fetching에 대비해 phrase를 미리 만들어 놓습니다.
   */
  useEffect(() => {
    if (!isFetching) {
      const idx = getRandomIdx();
      setPhrase(PHRASES[idx]);
    }
  }, [isFetching]);

  return (
    <LoadingTextWrapper>
      <TextArea isFetching={isFetching}>
        {phrase.map((ph) => (
          <Text key={ph}>{ph}</Text>
        ))}
      </TextArea>
    </LoadingTextWrapper>
  );
};

export default LoadingText;
