import styled from 'styled-components';
import { NoResourceSVG } from '~/assets';

export const NoResourceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: fit-content;
`;

export const NoResourceImage = styled.img.attrs({
  src: NoResourceSVG,
  alt: 'no resource',
})`
  width: 200px;
  height: 200px;
`;

export const NoResourceContent = styled.p`
  width: 100%;
  text-align: center;
  margin-top: 19px;
  font-size: 30px;
  color: var(--baemin100);
`;
