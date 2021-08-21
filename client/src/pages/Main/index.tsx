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
import { MainContainer } from './index.style';

const Main: FC = () => {
  return (
    <MainContainer>
      <Cat />
      <Sonic />
      <Chicken />
      <Flower />
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
