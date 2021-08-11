import React from 'react';
import { Link } from '~/core/Router';

const LinkedHello: React.FC = () => {
  return <Link to="/world">goto world</Link>;
};

export default LinkedHello;
