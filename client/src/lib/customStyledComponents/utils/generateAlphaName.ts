/* eslint-disable no-bitwise */

const AD_REPLACER_R = /(a)(d)/gi;

const charsLength = 52;

/**
 * 태그별로 유니크한 클래스 네임을 만들기 위해 사용하는 함수입니다.
 * 해당 함수는 아래 링크에서 참고했습니다.
 * https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/generateAlphabeticName.ts
 */
const getAlphabeticChar = (code: number) =>
  String.fromCharCode(code + (code > 25 ? 39 : 97));

export function generateAlphabeticName(code: number) {
  let name = '';
  let x;

  const shiftedCode = code << 27;

  for (x = Math.abs(shiftedCode); x > charsLength; x = (x / charsLength) | 0) {
    name = getAlphabeticChar(x % charsLength) + name;
  }

  return (getAlphabeticChar(x % charsLength) + name).replace(
    AD_REPLACER_R,
    '$1-$2',
  );
}
