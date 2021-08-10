import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Title = styled.div`
  color: red;
`;

const App = () => {
  return <Title>안녕 세상아!</Title>;
};
ReactDOM.render(<App />, document.getElementById('app'));
