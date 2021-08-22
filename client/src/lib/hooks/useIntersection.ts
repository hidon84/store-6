/* eslint-disable @typescript-eslint/no-shadow */
import { MutableRefObject, useEffect, useState } from 'react';

interface IntersectionOption extends IntersectionObserverInit {
  freezeOnceVisible?: boolean;
}

/**
 * 지정한 ref가 화면에 보이게 되면,
 * IntersectionObserver API 를 사용하여
 * 지정 ref의 intersection change entry를 반환합니다.
 * @example
 * useEffect(() => {
 *   if (entry?.isIntersecting) dispatch(setNextPage());
 * }, [entry]);
 */
export const useIntersection = (
  ref: MutableRefObject<HTMLElement>,
  { threshold = 0 }: IntersectionOption,
): IntersectionObserverEntry => {
  const [entry, setEntry] = useState<IntersectionObserverEntry>();
  const updateEntry = ([entry]: IntersectionObserverEntry[]) => setEntry(entry);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(updateEntry, { threshold });

    observer.observe(node);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return entry;
};

export default useIntersection;
