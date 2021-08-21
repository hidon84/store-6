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
import Cat from '~/components/main/pixelArts/cat';
import Sonic from '~/components/main/pixelArts/sonic';
import Chicken from '~/components/main/pixelArts/chicken';
import Flower from '~/components/main/pixelArts/flower';
import Ladybug from '~/components/main/pixelArts/ladybug/ladybug';
import { MainContainer } from './index.style';

const Main: FC = () => {
  return (
    <MainContainer>
      <Cat />
      <Sonic coord={{ left: '15%', top: '30%' }} />
      <Chicken coord={{ left: '40%' }} />
      <Flower coord={{ right: '10%' }} />
      <Ladybug coord={{ bottom: '20%' }} />
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
