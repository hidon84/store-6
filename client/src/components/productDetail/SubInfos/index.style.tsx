import styled from 'styled-components';
import { BelowArrowSVG, ProductInfoSubDividerSVG } from '~/assets';

export const SubInfosWrapper = styled.div<{ lastSubInfo: boolean }>`
  box-sizing: border-box;
  padding: 0 10px;
  height: 20px;
  margin-top: 13px;
  margin-bottom: ${({ lastSubInfo }) => (lastSubInfo ? '5px' : '0px')};
  cursor: pointer;
`;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.span`
  font-size: 15px;
  color: #999999;
`;

export const DownArrow = styled.img.attrs({
  src: BelowArrowSVG,
  alt: 'below-arrow',
})``;

export const SubSectionDivider = styled.img.attrs({
  src: ProductInfoSubDividerSVG,
  alt: 'sub-section-divider',
})``;
