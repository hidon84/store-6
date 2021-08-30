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

export type PropsType = { [key: string]: unknown };

/**
 * Tag를 받아 Component 클로져를 반환합니다.
 */
const constructWithTag = (tag: string) => {
  const Tag = `${tag}` as keyof JSX.IntrinsicElements;
  let classNameIndex = 1000;

  const construct =
    (templateStr: TemplateStringsArray, ...args: unknown[]) =>
    (props: PropsType) => {
      const className = generateAlphabeticName(++classNameIndex);
      const classNameWithSuffix = `custom-sc-${className}`;

      useEffect(() => {
        const parsedCSS = cssParser(templateStr, props, args);
        const serializedString = cssSerializer(classNameWithSuffix, parsedCSS);
        applyToHead(serializedString);
      }, [classNameWithSuffix, props]);

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
