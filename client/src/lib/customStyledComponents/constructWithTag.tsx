/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-plusplus */
/* eslint-disable react/display-name */
import { useEffect } from 'react';

import applyToHead from './utils/applyToHead';
import checkIsValidDOMProps from './utils/checkIsValidDOMProps';
import cssParser from './utils/cssParser';
import cssSerializer from './utils/cssStringify';
import { generateAlphabeticName } from './utils/generateAlphaName';

let classNameIndex = 1000;

export type PropsType = { [key: string]: any };

/**
 * Tag를 받아 Component 클로져를 반환합니다.
 */
const constructWithTag = (tag: string) => {
  const Tag = `${tag}` as keyof JSX.IntrinsicElements;

  const construct =
    (templateStr: TemplateStringsArray, ...args: unknown[]) =>
    (props: PropsType) => {
      const className = generateAlphabeticName(++classNameIndex);
      const classNameWithSuffix = `custom-sc-${className}`;

      useEffect(() => {
        const parsedCSS = cssParser(templateStr, props, args);
        const serializedString = cssSerializer(tag, parsedCSS);
        applyToHead(serializedString);
      }, [props]);

      const domProps = checkIsValidDOMProps(tag, props);

      return (
        <Tag {...domProps} className={classNameWithSuffix}>
          {props.children}
        </Tag>
      );
    };

  return construct;
};

export default constructWithTag;
