/**
 * @param start 시작숫자(포함)
 * @param end 끝숫자(포함)
 * @returns start ~ end 사이의 랜덤 정수
 */
const randBetween = (start: number, end: number) => {
  return Math.floor(Math.random() * (end - start + 1) + start);
};

export { randBetween };
