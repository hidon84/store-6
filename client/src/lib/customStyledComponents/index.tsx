/* eslint-disable @typescript-eslint/ban-types */
import constructWithTag from '~/lib/customStyledComponents/constructWithTag';
import domElements from './utils/domElements';

interface Styled {
  [tag: string]: (string: TemplateStringsArray, ...args: unknown[]) => Function;
}

const styled: Styled = {};

domElements.forEach((domElement) => {
  styled[domElement] = constructWithTag(domElement);
});

export default styled;
