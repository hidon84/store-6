import { FC } from 'react';
import Coord from './coord';
import './cat/cat.css';
import './chicken/chicken.css';
import './hen/hen.css';
import './rooster/rooster.css';
import './flower/flower.css';
import './ladybug/ladybug.css';
import './sonic/sonic.css';
import './hedgehog/hedgehog.css';
import { randBetween } from '~/utils/random';

type Minimi =
  | 'cat'
  | 'chicken'
  | 'rooster'
  | 'hen'
  | 'sonic'
  | 'flower'
  | 'ladybug'
  | 'hedgehog';
const minimiMap = [
  'cat',
  'chicken',
  'rooster',
  'hen',
  'sonic',
  'flower',
  'ladybug',
  'hedgehog',
];

const PixelArt: FC<{
  coord?: Coord;
  className: Minimi;
}> = ({ coord, className }) => {
  return (
    <div style={{ ...coord }} className={className}>
      {' '}
    </div>
  );
};

const genRandomPixelArt = () => {
  const randM = randBetween(0, minimiMap.length - 1);
  const minimi = minimiMap[randM] as Minimi;
  const y = randBetween(5, 95);
  const x = randBetween(5, 95);

  return { minimi, y, x };
};

export { genRandomPixelArt, Minimi };

export default PixelArt;
