/**
 * 변환한 문법을 head 내의 style 태그에 적용합니다.
 */
const applyToHead = (cssString: string) => {
  const $style = document.createElement('style');
  $style.innerHTML = cssString;
  document.querySelector('head')?.appendChild($style);
};

export default applyToHead;
