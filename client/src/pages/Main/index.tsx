import { FC } from 'react';
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
  return (
    <MainContainer>
      <PixelArt className="cat" />
      <PixelArt className="sonic" coord={{ left: '15%', top: '30%' }} />
      <PixelArt className="chicken" coord={{ left: '40%' }} />
      <PixelArt className="flower" coord={{ right: '10%' }} />
      <PixelArt className="flower" coord={{ bottom: '20%' }} />
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
