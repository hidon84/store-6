import { PropsType } from '~/lib/customStyledComponents/constructWithTag';

const checkIsValidDOMProps = (tag: string, props: PropsType) => {
  const domProps: PropsType = {};
  const $dom = document.createElement(tag);
  Object.keys(props).forEach((prop) => {
    if (prop in $dom) domProps[prop] = props[prop];
  });

  return domProps;
};

export default checkIsValidDOMProps;
