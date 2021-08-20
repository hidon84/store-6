import { FC, useCallback } from 'react';
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

const AlertNotAvailable = () => {
  alert(
    '아직 구현되지 않았습니다. 배달이를 눌러서 일단 로그인 페이지로 가시죠.',
  );
};

const Book: FC = () => {
  return (
    <button
      type="button"
      style={{
        position: 'absolute',
        left: '20%',
        top: '110px',
        cursor: 'pointer',
      }}
      onClick={AlertNotAvailable}
    >
      <img src={BigBookSVG} alt="" />
    </button>
  );
};

const Baedal: FC = () => {
  const { push } = useHistory();
  const onClick = useCallback(() => {
    push('/login');
  }, []);
  return (
    <button
      type="button"
      style={{
        position: 'absolute',
        left: '30%',
        top: '330px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <img src={BigBaedalSVG} alt="" />
    </button>
  );
};

const Hat: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '10%',
      top: '580px',
      cursor: 'pointer',
    }}
    onClick={AlertNotAvailable}
  >
    <img src={BigHatSVG} alt="" />
  </button>
);

const Gift: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '0px',
      top: '280px',
      cursor: 'pointer',
    }}
    onClick={AlertNotAvailable}
  >
    <img src={BigGiftSVG} alt="" />
  </button>
);

const House: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      right: '30%',
      top: '240px',
      cursor: 'pointer',
    }}
    onClick={AlertNotAvailable}
  >
    <img src={BigHouseSVG} alt="" />
  </button>
);

const Kk: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      right: '25%',
      top: '100px',
      cursor: 'pointer',
    }}
    onClick={AlertNotAvailable}
  >
    <img src={BigKKSVG} alt="" />
  </button>
);

const Tree: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      right: '35%',
      top: '550px',
      cursor: 'pointer',
    }}
    onClick={AlertNotAvailable}
  >
    <img src={BigTreeSVG} alt="" />
  </button>
);

const Pencil: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      right: '0%',
      top: '330px',
      cursor: 'pointer',
    }}
    onClick={AlertNotAvailable}
  >
    <img src={BigPencilSVG} alt="" />
  </button>
);

const Colab: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      right: '10%',
      top: '550px',
      cursor: 'pointer',
    }}
    onClick={AlertNotAvailable}
  >
    <img src={BigColabSVG} alt="" />
  </button>
);

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
