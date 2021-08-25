import styled from 'styled-components';
import { FilledHeartSVG, UnfilledHeartSVG } from '~/assets';

interface LikeButtonContentProps {
  isLike?: boolean;
  fillLineWhenHover?: boolean;
}

export const LikeButtonContent = styled.img.attrs<LikeButtonContentProps>(
  ({ isLike = false }) => ({
    src: isLike ? FilledHeartSVG : UnfilledHeartSVG,
    alt: 'heart to like product',
  }),
)<LikeButtonContentProps>`
  transition: 0.3s filter;
  ${({ isLike = false, fillLineWhenHover = false }) =>
    !isLike &&
    fillLineWhenHover &&
    `
    &:hover {
      filter: invert(61%) sepia(53%) saturate(573%) hue-rotate(129deg) brightness(95%) contrast(87%);
    }
  `}
  ${({ isLike = false, fillLineWhenHover = false }) =>
    isLike &&
    fillLineWhenHover &&
    `
    &:hover {
      filter: brightness(80%);
    }
  `}
`;

export const LikeButton = styled.button`
  cursor: pointer;
  margin-top: 5px;
`;
