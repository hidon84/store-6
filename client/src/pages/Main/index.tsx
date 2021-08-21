import { FC, useEffect, useState } from 'react';
import {
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
} from '~/components/main/IconButtons';
import PixelArt from '~/components/main/pixelArts';
import { MainContainer } from './index.style';

const Main: FC = () => {
  const [y, setY] = useState(0);
  const [x, setX] = useState(0);

  const onKeyDown = (event: globalThis.KeyboardEvent) => {
    switch (event.code) {
      case 'ArrowUp':
        setY(Math.max(0, y - 1));
        break;
      case 'ArrowDown':
        setY(Math.min(90, y + 1));
        break;
      case 'ArrowLeft':
        setX(Math.max(0, x - 1));
        break;
      case 'ArrowRight':
        setX(Math.min(90, x + 1));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    document.body.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
  return (
    <MainContainer>
      <PixelArt className="cat" />
      <PixelArt className="sonic" coord={{ left: '15%', top: '30%' }} />
      <PixelArt className="chicken" coord={{ left: `${x}%`, top: `${y}%` }} />
      <PixelArt className="flower" coord={{ right: '10%' }} />
      <PixelArt className="ladybug" coord={{ bottom: '20%' }} />
      <PixelArt className="hedgehog" coord={{ bottom: '20%', right: '40%' }} />
      <Book />
      <Baedal />
      <Hat />
      <Gift />
      <House />
      <Kk />
      <Tree />
      <Pencil />
      <Colab />
      <Stain />
      <Logo />
    </MainContainer>
  );
};

export default Main;
