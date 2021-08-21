import { FC } from 'react';
import Coord from '../coord';
import './sonic.css';

const Sonic: FC<{ coord?: Coord }> = ({ coord }) => {
  return (
    <div style={{ ...coord }} className="sonic">
      {' '}
    </div>
  );
};

export default Sonic;
