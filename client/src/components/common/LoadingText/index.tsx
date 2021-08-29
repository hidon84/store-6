import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { elementFadeIn, elementFadeOut } from '~/utils/elementFade';
import { getRandomIndex } from '~/utils/getRandomIndex';
import S from './index.style';
import { PHRASES } from './phrases';

interface IProps {
  show: boolean;
  fadeOutDuration?: number;
}

const LoadingText: FC<IProps> = ({ show, fadeOutDuration = 400 }) => {
  const wrapperRef = useRef<HTMLDivElement>();
  const [loadingText, setLoadingText] = useState([]);

  const setRandomLoadingText = () => {
    setLoadingText(PHRASES[getRandomIndex(PHRASES.length)]);
  };

  useEffect(() => {
    if (show && wrapperRef.current) {
      elementFadeIn(wrapperRef.current, 0);
    } else if (wrapperRef.current) {
      elementFadeOut(wrapperRef.current, fadeOutDuration).then(() => {
        setRandomLoadingText();
      });
    }
  }, [show, wrapperRef.current]);

  const loadingTexts = useMemo(() => {
    return loadingText.map((ph) => <S.Text key={ph}>{ph}</S.Text>);
  }, [loadingText]);

  return (
    <S.LoadingTextWrapper ref={wrapperRef}>
      <S.TextArea>{loadingTexts}</S.TextArea>
    </S.LoadingTextWrapper>
  );
};

export default LoadingText;
