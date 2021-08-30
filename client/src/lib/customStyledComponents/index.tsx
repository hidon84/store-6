/* eslint-disable @typescript-eslint/ban-types */
import constructWithTag from '~/lib/customStyledComponents/constructWithTag';
import domElements from './utils/domElements';

interface Styled {
  [tag: string]: (string: TemplateStringsArray, ...args: unknown[]) => Function;
}

/**
 * custom styled components를 사용하기 위해 styled를 호출하여 사용하게 됩니다.
 * styled는 HTML의 모든 태그를 키 값으로 가지고 있습니다.
 * @example
 *   styled.div``
 *   styled.a``
 */
const styled: Styled = {};

domElements.forEach((domElement) => {
  styled[domElement] = constructWithTag(domElement);
});

export default styled;
