import { FC } from 'react';
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

const Book: FC = () => {
  return (
    <button
      type="button"
      style={{
        position: 'absolute',
        left: '450px',
        top: '110px',
        cursor: 'pointer',
      }}
    >
      <img src={BigBookSVG} alt="" />
    </button>
  );
};

const Baedal: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '550px',
      top: '300px',
      cursor: 'pointer',
    }}
  >
    <img src={BigBaedalSVG} alt="" />
  </button>
);

const Hat: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '300px',
      top: '580px',
      cursor: 'pointer',
    }}
  >
    <img src={BigHatSVG} alt="" />
  </button>
);

const Gift: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '150px',
      top: '280px',
      cursor: 'pointer',
    }}
  >
    <img src={BigGiftSVG} alt="" />
  </button>
);

const House: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '960px',
      top: '240px',
      cursor: 'pointer',
    }}
  >
    <img src={BigHouseSVG} alt="" />
  </button>
);

const Kk: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '1100px',
      top: '100px',
      cursor: 'pointer',
    }}
  >
    <img src={BigKKSVG} alt="" />
  </button>
);

const Tree: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '800px',
      top: '550px',
      cursor: 'pointer',
    }}
  >
    <img src={BigTreeSVG} alt="" />
  </button>
);

const Pencil: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '1300px',
      top: '330px',
      cursor: 'pointer',
    }}
  >
    <img src={BigPencilSVG} alt="" />
  </button>
);

const Colab: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '1100px',
      top: '550px',
      cursor: 'pointer',
    }}
  >
    <img src={BigColabSVG} alt="" />
  </button>
);

const Stain: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '500px',
      top: '100px',
      zIndex: -1,
    }}
  >
    <img src={stainSVG} alt="" />
  </button>
);

const Logo: FC = () => (
  <button
    type="button"
    style={{
      position: 'absolute',
      left: '50px',
      top: '10px',
      cursor: 'pointer',
    }}
  >
    <img src={logoSVG} alt="" />
  </button>
);

export { Book, Baedal, Hat, Gift, House, Kk, Tree, Pencil, Colab, Stain, Logo };
