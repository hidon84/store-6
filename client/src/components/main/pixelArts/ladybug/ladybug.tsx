import { FC } from 'react';
import './ladybug.css';
import Coord from '../coord';

const Ladybug: FC<{ coord?: Coord }> = ({ coord }) => {
  return (
    <div style={{ ...coord }} className="ladybug">
      {' '}
    </div>
  );
};

export default Ladybug;
