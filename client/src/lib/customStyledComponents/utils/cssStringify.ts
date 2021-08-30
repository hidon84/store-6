import { compile, serialize, stringify } from 'stylis';

/**
 * stylis를 사용하여 css를 serialize 합니다.
 * compile을 사용하여 SCSS 문법을 해석하고,
 * 이를 직렬화하여 반환합니다.
 */
const cssSerializer = (tag: string, content: string) =>
  serialize(compile(`${tag}{${content}}`), stringify);

export default cssSerializer;
