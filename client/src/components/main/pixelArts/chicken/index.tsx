import { FC } from 'react';
import './chicken.css';
import Coord from '../coord';

const Chicken: FC<{ coord?: Coord }> = ({ coord }) => {
  return (
    <div style={{ ...coord }} className="chicken">
      {' '}
    </div>
  );
};

export default Chicken;
