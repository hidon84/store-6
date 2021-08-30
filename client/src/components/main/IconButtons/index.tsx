import { FC, useCallback, MouseEvent, memo } from 'react';
import styled, { css, keyframes } from 'styled-components';
import {
  BigBaedalSVG,
  BigBookSVG,
  BigColabSVG,
  BigGiftSVG,
  BigHatSVG,
  BigHouseSVG,
  BigKKSVG,
  BigPencilSVG,
  BigTreeSVG,
  logoSVG,
  stainSVG,
  doodleAnnouncement1,
  doodleAnnouncement2,
} from '~/assets';
import { CATEGORY_TO_STR } from '~/lib/constants/categories';

export const BUTTON_INFOS = {
  book: ['23%', '15%', BigBookSVG],
  hat: ['14%', '62%', BigHatSVG],
  baedal: ['30%', '43%', BigBaedalSVG],
  gift: ['5%', '34%', BigGiftSVG],
  house: ['58%', '36%', BigHouseSVG],
  kk: ['72%', '18%', BigKKSVG],
  tree: ['38%', '76%', BigTreeSVG],
  pencil: ['80%', '43%', BigPencilSVG],
  colab: ['66%', '72%', BigColabSVG],
};

const rotate = keyframes`
  100% {
    transform: rotate(1turn);
  }
`;

const ButtonWrapper = styled.button<{ category: string; entered?: boolean }>`
  position: absolute;
  cursor: pointer;
  left: ${({ category }) => BUTTON_INFOS[category][0]};
  top: ${({ category }) => BUTTON_INFOS[category][1]};

  animation: ${({ entered }) =>
    entered
      ? css`
          ${rotate} .2s linear infinite
        `
      : ``};
  animation-play-state: ${({ entered }) => (entered ? 'running' : 'paused')};

  .category-text {
    display: inline-block;
    opacity: 0;
    position: absolute;
    bottom: 0;
    left: 50%;
    padding: 5px 20px;
    transform: translateX(-50%);
    color: #fff;
    background-color: #000;
    border-radius: 20px;
    border: 1px solid #fff;
    transition: 0.3s;
    word-break: keep-all;
  }
  &:hover .category-text {
    opacity: 1;
  }
`;

export type TypeCategoryIcon =
  | 'book'
  | 'hat'
  | 'house'
  | 'kk'
  | 'baedal'
  | 'tree'
  | 'pencil'
  | 'colab'
  | 'gift';

const Button: FC<{
  category: TypeCategoryIcon;
  entered?: boolean;
  onClick?: (y: number, x: number) => void;
}> = ({ category, entered, onClick }) => {
  const cb = useCallback((_: MouseEvent<HTMLElement>) => {
    const top = BUTTON_INFOS[category][1];
    const left = BUTTON_INFOS[category][0];
    const myY = parseInt(top.replace('%', ''), 10);
    const myX = parseInt(left.replace('%', ''), 10);
    onClick?.(myY, myX);
  }, []);
  return (
    <ButtonWrapper
      onClick={cb}
      category={category}
      type="button"
      entered={entered}
    >
      <span className="category-text">{CATEGORY_TO_STR[category]}</span>
      <img src={BUTTON_INFOS[category][2]} alt="icon" />
    </ButtonWrapper>
  );
};

const Stain: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '22%',
      top: '16%',
      zIndex: -1,
    }}
  >
    <img src={stainSVG} alt="stain" />
  </button>
);

const Logo: FC = () => (
  <button
    type="button"
    style={{
      position: 'fixed',
      left: '50px',
      top: '10px',
    }}
  >
    <img src={logoSVG} alt="logo" />
  </button>
);

const DoodleAnnouncement1: FC = () => (
  <img
    style={{
      position: 'absolute',
      left: '48%',
      top: '20%',
    }}
    src={doodleAnnouncement1}
    alt="상하좌우"
  />
);

const DoodleAnnouncement2: FC = () => (
  <img
    style={{
      position: 'fixed',
      right: '50px',
      top: '25px',
    }}
    src={doodleAnnouncement2}
    alt="음성채팅"
  />
);

const CategoryButton = memo(Button);

export {
  Stain,
  Logo,
  CategoryButton,
  DoodleAnnouncement1,
  DoodleAnnouncement2,
};
