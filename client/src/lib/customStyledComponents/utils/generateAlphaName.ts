/* eslint-disable no-bitwise */
// https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/generateAlphabeticName.ts

const AD_REPLACER_R = /(a)(d)/gi;

const charsLength = 52;

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
