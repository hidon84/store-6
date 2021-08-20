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
import { MainContainer } from './index.style';

const Main: FC = () => {
  return (
    <MainContainer>
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
