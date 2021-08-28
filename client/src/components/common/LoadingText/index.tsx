import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { elementFadeIn, elementFadeOut } from '~/utils/elementFade';
import { getRandomIndex } from '~/utils/getRandomIndex';
import S from './index.style';
import { PHRASES } from './phrases';

interface IProps {
  show: boolean;
}

const LoadingText: FC<IProps> = ({ show }) => {
  const wrapperRef = useRef<HTMLDivElement>();
  const [loadingText, setLoadingText] = useState([]);

  const setRandomLoadingText = () => {
    setLoadingText(PHRASES[getRandomIndex(PHRASES.length)]);
  };

  useEffect(() => {
    if (show && wrapperRef.current) {
      elementFadeIn(wrapperRef.current, 0);
    } else {
      elementFadeOut(wrapperRef.current, 400).then(() => {
        setRandomLoadingText();
      });
    }
  }, [show]);

  const loadingTexts = useMemo(() => {
    return loadingText.map((ph) => <S.Text key={ph}>{ph}</S.Text>);
  }, [loadingText]);

  return (
    <S.LoadingTextWrapper ref={wrapperRef}>
      <S.TextArea show={show}>{loadingTexts}</S.TextArea>
    </S.LoadingTextWrapper>
  );
};

export default LoadingText;
