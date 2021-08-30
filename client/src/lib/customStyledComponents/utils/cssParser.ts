import { PropsType } from '~/lib/customStyledComponents/constructWithTag';

/**
 * Template String으로 둘러쌓인 string은 배열로 들어오게 됩니다.
 * 만약 중간에 ${expression} 형태로 둘러쌓인 placeholder를 만나게 된다면,
 * args에 넣고 그 이후의 정보를 strings의 배열 다음 인덱스에 넣게 됩니다.
 *
 * 즉, cssParser는 template string 배열을 순회하며
 * placeholder가 있을 경우 이를 해석하여 string을 반환하게 됩니다.
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
