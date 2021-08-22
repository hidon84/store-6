import styled from 'styled-components';
import { BelowArrowSVG, ProductInfoSubDividerSVG } from '~/assets';

export const SubInfosWrapper = styled.div<{
  lastSubInfo: boolean;
}>`
  box-sizing: border-box;
  margin-top: 13px;
  margin-bottom: ${({ lastSubInfo }) => (lastSubInfo ? '5px' : '0px')};

  height: fit-content;
  cursor: pointer;
`;

export const TitleSection = styled.div`
  display: flex;
  height: 20px;
  padding: 0 10px;
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
})<{ isOpened: boolean }>`
  transition: transform 0.4s ease-out;
  transform: ${({ isOpened }) => (isOpened ? 'rotate(180deg)' : 'none')};
`;

export const SubSectionDivider = styled.img.attrs({
  src: ProductInfoSubDividerSVG,
  alt: 'sub-section-divider',
})<{ isUpperDivider?: boolean }>`
  margin-top: ${({ isUpperDivider }) => (isUpperDivider ? '14px' : '0px')};
`;

export const InfoList = styled.dl<{ isOpened: boolean }>`
  /* visibility: ${({ isOpened }) => (isOpened ? 'visible' : 'hidden')}; */
  overflow-y: hidden;
  max-height: ${({ isOpened }) => (isOpened ? '290px' : '0')};
  transition: max-height 0.4s ease-out;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const InfoTerms = styled.dt`
  width: 250px;
  padding: 0 10px;
  font-size: 12px;
  color: #999;
`;

export const InfoDescription = styled(InfoTerms).attrs({
  as: 'dd',
})`
  color: #d9d9d9;
  margin-top: 8px;
`;
