import { FC, useCallback } from 'react';
import styled from 'styled-components';
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
} from '~/assets';
import { useHistory } from '~/core/Router';
import { alert } from '~/utils/modal';

const ALERT_MESSAGE =
  '아직 구현되지 않았습니다. 배달이를 눌러서 일단 로그인 페이지로 가시죠.';
const AlertNotAvailable = () => alert(ALERT_MESSAGE);

const BUTTON_INFOS = {
  book: ['20%', '110px', BigBookSVG],
  hat: ['10%', '580px', BigHatSVG],
  baedal: ['30%', '330px', BigBaedalSVG],
  gift: ['0%', '280px', BigGiftSVG],
  house: ['70%', '240px', BigHouseSVG],
  kk: ['75%', '100px', BigKKSVG],
  tree: ['65%', '550px', BigTreeSVG],
  pencil: ['100%', '330px', BigPencilSVG],
  colab: ['90%', '550px', BigColabSVG],
};

const ButtonWrapper = styled.button<{ category: string }>`
  position: absolute;
  cursor: pointer;
  left: ${({ category }) => BUTTON_INFOS[category][0]};
  top: ${({ category }) => BUTTON_INFOS[category][1]};
`;

const Button: FC<{ category: string; onClick?: () => void }> = ({
  category,
  onClick,
}) => (
  <ButtonWrapper
    category={category}
    type="button"
    onClick={onClick || AlertNotAvailable}
  >
    <img src={BUTTON_INFOS[category][2]} alt="icon" />
  </ButtonWrapper>
);

const Book: FC = () => <Button category="book" />;
const Hat: FC = () => <Button category="hat" />;
const Gift: FC = () => <Button category="gift" />;
const House: FC = () => <Button category="house" />;
const Kk: FC = () => <Button category="kk" />;
const Tree: FC = () => <Button category="tree" />;
const Pencil: FC = () => <Button category="pencil" />;
const Colab: FC = () => <Button category="colab" />;
const Baedal: FC = () => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/login'), []);
  return <Button category="baedal" onClick={onClick} />;
};

const Stain: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '20%',
      top: '100px',
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

export { Book, Baedal, Hat, Gift, House, Kk, Tree, Pencil, Colab, Stain, Logo };
