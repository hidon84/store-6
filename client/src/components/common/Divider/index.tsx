import styled from 'styled-components';
import { LineSVG } from '~/assets';

/*
 * @example
 * <Divider width="70%" />
 * <Divider width="32px" />
 * <Divider thick direction="horizontal" />
 */
const Divider = styled.div<{
  width?: string;
  thick?: boolean;
  direction?: 'vertical' | 'horizontal';
}>`
  width: ${({ width }) => width || '100%'};
  height: ${({ thick }) => (thick ? '4px' : '1px')};
  transform: ${({ direction }) =>
    direction === 'vertical' ? 'rotate(90deg)' : 'none'};
  background: url(${LineSVG}) bottom left no-repeat;
  background-size: cover;
  position: relative;
  right: 10px;
`;

export default Divider;
