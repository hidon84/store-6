import React from 'react';
import { Link, useHistory, useParams } from '~/core/Router';

const LinkedHello: React.FC = () => {
  const history = useHistory();
  const params = useParams();
  console.log(params);
  console.log(history.location.state);
  return <Link to="/world">goto world</Link>;
};

export default LinkedHello;
