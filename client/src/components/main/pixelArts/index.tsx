import { FC } from 'react';
import Coord from './coord';
import './cat/cat.css';
import './chicken/chicken.css';
import './flower/flower.css';
import './ladybug/ladybug.css';
import './sonic/sonic.css';
import './hedgehog/hedgehog.css';

const PixelArt: FC<{
  coord?: Coord;
  className: 'cat' | 'chicken' | 'sonic' | 'flower' | 'ladybug' | 'hedgehog';
}> = ({ coord, className }) => {
  return (
    <div style={{ ...coord }} className={className}>
      {' '}
    </div>
  );
};

export default PixelArt;
