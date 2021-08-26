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

export const BUTTON_INFOS = {
  book: ['23%', '15%', BigBookSVG],
  hat: ['14%', '62%', BigHatSVG],
  baedal: ['30%', '43%', BigBaedalSVG],
  gift: ['5%', '34%', BigGiftSVG],
  house: ['51%', '26%', BigHouseSVG],
  kk: ['72%', '18%', BigKKSVG],
  tree: ['38%', '76%', BigTreeSVG],
  pencil: ['80%', '43%', BigPencilSVG],
  colab: ['66%', '72%', BigColabSVG],
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

const Book: FC = () => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/signup/select'), []);
  return <Button category="book" onClick={onClick} />;
};
const Hat: FC = () => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/me'), []);
  return <Button category="hat" onClick={onClick} />;
};
const Gift: FC = () => <Button category="gift" />;
const House: FC = () => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/products'), []);
  return <Button category="house" onClick={onClick} />;
};

const Kk: FC = () => {
  const { push } = useHistory();
  const onClick = useCallback(() => push('/cart'), []);
  return <Button category="kk" onClick={onClick} />;
};

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

export { Book, Baedal, Hat, Gift, House, Kk, Tree, Pencil, Colab, Stain, Logo };
