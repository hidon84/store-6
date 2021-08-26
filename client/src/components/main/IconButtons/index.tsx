import { FC, useCallback } from 'react';
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
import { useHistory } from '~/core/Router';
import { alert } from '~/utils/modal';

const ALERT_MESSAGE =
  '아직 구현되지 않았습니다. 배달이를 눌러서 일단 로그인 페이지로 가시죠.';
const AlertNotAvailable = () => alert(ALERT_MESSAGE);

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
  onClick?: () => void;
}> = ({ category, entered, onClick }) => (
  <ButtonWrapper
    category={category}
    type="button"
    entered={entered}
    onClick={onClick || AlertNotAvailable}
  >
    <img src={BUTTON_INFOS[category][2]} alt="icon" />
  </ButtonWrapper>
);

const Book: FC<{ entered?: TypeCategoryIcon }> = ({ entered }) => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/signup/select'), []);
  return (
    <Button category="book" entered={entered === 'book'} onClick={onClick} />
  );
};

const Hat: FC<{ entered?: TypeCategoryIcon }> = ({ entered }) => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/me'), []);
  return (
    <Button category="hat" entered={entered === 'hat'} onClick={onClick} />
  );
};

const Gift: FC<{ entered?: TypeCategoryIcon }> = ({ entered }) => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/products'), []);
  return (
    <Button category="gift" entered={entered === 'gift'} onClick={onClick} />
  );
};

const House: FC<{ entered?: TypeCategoryIcon }> = ({ entered }) => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/products'), []);
  return (
    <Button category="house" onClick={onClick} entered={entered === 'house'} />
  );
};

const Kk: FC<{ entered?: TypeCategoryIcon }> = ({ entered }) => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/products'), []);
  return <Button category="kk" onClick={onClick} entered={entered === 'kk'} />;
};

const Tree: FC<{ entered?: TypeCategoryIcon }> = ({ entered }) => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/products'), []);
  return (
    <Button category="tree" entered={entered === 'tree'} onClick={onClick} />
  );
};

const Pencil: FC<{ entered?: TypeCategoryIcon }> = ({ entered }) => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/products'), []);
  return (
    <Button
      category="pencil"
      entered={entered === 'pencil'}
      onClick={onClick}
    />
  );
};

const Baedal: FC<{ entered?: TypeCategoryIcon }> = ({ entered }) => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/products'), []);
  return (
    <Button
      category="baedal"
      entered={entered === 'baedal'}
      onClick={onClick}
    />
  );
};

const Colab: FC<{ entered?: TypeCategoryIcon }> = ({ entered }) => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/signup/select'), []);
  return (
    <Button category="colab" entered={entered === 'colab'} onClick={onClick} />
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
    onClick={AlertNotAvailable}
  >
    <img src={stainSVG} alt="" />
  </button>
);

const Logo: FC = () => (
  <button
    type="button"
    style={{
      position: 'fixed',
      left: '50px',
      top: '10px',
      cursor: 'pointer',
    }}
    onClick={AlertNotAvailable}
  >
    <img src={logoSVG} alt="" />
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

export {
  Book,
  Baedal,
  Hat,
  Gift,
  House,
  Kk,
  Tree,
  Pencil,
  Colab,
  Stain,
  Logo,
  DoodleAnnouncement1,
  DoodleAnnouncement2,
};
