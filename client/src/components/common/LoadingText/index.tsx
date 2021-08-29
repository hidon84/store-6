import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { elementFadeIn, elementFadeOut } from '~/utils/elementFade';
import { getRandomIndex } from '~/utils/getRandomIndex';
import S from './index.style';
import { phrases } from './phrases';

interface IProps {
  show: boolean;
  fadeOutDuration?: number;
}

const phrasesWithIndex = phrases.map((v, i) => ({ i, v }));
const initialPhrasesCount = '0'
  .repeat(phrases.length)
  .split('')
  .map((v) => Number(v));

const LoadingText: FC<IProps> = ({ show, fadeOutDuration = 400 }) => {
  const wrapperRef = useRef<HTMLDivElement>();
  const [loadingText, setLoadingText] = useState([]);
  const [phrasesCount, setPhrasesCount] = useState(initialPhrasesCount);

  const minCount = useMemo(() => Math.min(...phrasesCount), [phrasesCount]);
  const minPhrases = useMemo(
    () => phrasesWithIndex.filter((p) => phrasesCount[p.i] <= minCount),
    [minCount, phrasesCount],
  );

  const setRandomLoadingText = () => {
    const nextPhrasesCount = [...phrasesCount];

    if (!minPhrases.length) {
      // 모든 아이템의 나타난 횟수가 동일할 경우 전체에서 랜덤
      const itemIndex = getRandomIndex(phrases.length);
      nextPhrasesCount[itemIndex] += 1;
      setPhrasesCount(nextPhrasesCount);
      setLoadingText(phrases[itemIndex]);
      return;
    }

    // 나타난 횟수가 최소인 것중에서 랜덤
    const minItemIndex = getRandomIndex(minPhrases.length);
    nextPhrasesCount[minPhrases[minItemIndex].i] += 1;
    setPhrasesCount(nextPhrasesCount);
    setLoadingText(minPhrases[minItemIndex].v);
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
