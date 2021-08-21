import { FC } from 'react';
import './cat.css';
import Coord from '../coord';

const Cat: FC<{ coord?: Coord }> = ({ coord }) => {
  return (
    <div style={{ ...coord }} className="cat">
      {' '}
    </div>
  );
};

export default Cat;
