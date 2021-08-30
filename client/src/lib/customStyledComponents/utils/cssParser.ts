import { PropsType } from '~/lib/customStyledComponents/constructWithTag';

/**
 * Template String으로 둘러쌓인 string은 배열로 들어오게 됩니다.
 * cssParser는 이 배열을 한 줄의 string으로 만듭니다.
 */
const cssParser = (
  strings: TemplateStringsArray,
  props: PropsType,
  ...args: unknown[]
): string => {
  const css = strings
    .map((str, idx) => {
      let arg = args[idx] ?? '';

      if (arg instanceof Function) arg = arg(props);
      return `${str}${arg}`;
    })
    .join('');

  return css;
};

export default cssParser;
