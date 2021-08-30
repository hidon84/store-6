import { PropsType } from '~/lib/customStyledComponents/constructWithTag';

/**
 * 해당 props가 현재 선택된 tag에서 사용할 수 있는지 검증하고,
 * 유효하다면 해당 prop을 넣어줍니다.
 */
const checkIsValidDOMProps = (tag: string, props: PropsType) => {
  const domProps: PropsType = {};
  const $dom = document.createElement(tag);
  Object.keys(props).forEach((prop) => {
    if (prop in $dom) domProps[prop] = props[prop];
  });

  return domProps;
};

export default checkIsValidDOMProps;
