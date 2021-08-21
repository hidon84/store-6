import { FC } from 'react';
import './flower.css';
import Coord from '../coord';

const Flower: FC<{ coord?: Coord }> = ({ coord }) => {
  return (
    <div style={{ ...coord }} className="flower">
      {' '}
    </div>
  );
};

export default Flower;
