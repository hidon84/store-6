import styled from 'styled-components';
import { BelowArrowSVG, ProductInfoSubDividerSVG } from '~/assets';

export const DownArrow = styled.img.attrs({
  src: BelowArrowSVG,
  alt: 'below-arrow',
})``;

export const SubSectionDivider = styled.img.attrs({
  src: ProductInfoSubDividerSVG,
  alt: 'sub-section-divider',
})``;

export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const Title = styled.span`
  font-size: 15px;
  color: #999999;
`;
