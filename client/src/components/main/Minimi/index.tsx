import { FC, memo } from 'react';
import styled from 'styled-components';
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
import { getHashedNickName } from '~/utils/hashedNickname';

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

const PixelArtNickname = styled.div`
  position: relative;
  top: -10px;
  font-size: 11px;
  white-space: nowrap;
  line-height: 14px;
  text-align: center;
`;

const PixelArt: FC<{
  coord?: Coord;
  className: Minimi;
  id?: string;
}> = ({ coord, className, id }) => {
  return (
    <div style={{ ...coord }} className={className}>
      <PixelArtNickname>
        {`${id ? getHashedNickName(id) : ' '}`}
      </PixelArtNickname>
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

export default memo(PixelArt);
