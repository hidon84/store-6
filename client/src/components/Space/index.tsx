import styled from 'styled-components';
import { LineSVG } from '~/assets';

/*
 * 수직적으로 공백을 줄 때 사용합니다.
 * @example
 * <Space height="100px" />
 */
const Space = styled.div<{
  height?: string;
}>`
  height: ${({ height }) => height ?? '16px'};
  content: '';
`;

export default Space;
