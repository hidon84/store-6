import React, { FC } from 'react';
import styled from 'styled-components';
import { underlineSVG } from '~/assets/index';

const DividerFull = styled.div`
  content: '';
  width: 100%;
  padding-left: 2rem;
  height: 1rem;
  background: url(${underlineSVG}) bottom left no-repeat;
  box-sizing: border-box;
  background-size: contain;
`;

const Divider80 = styled.div`
  content: '';
  width: 80%;
  padding-left: 2rem;
  height: 1rem;
  background: url(${underlineSVG}) bottom left no-repeat;
  box-sizing: border-box;
  background-size: contain;
`;

const Divider: FC<{ width: 'full' | '80%' }> = ({ width }) => {
  if (width === 'full') return <DividerFull />;
  if (width === '80%') return <Divider80 />;
  return <div>unexpected option width: {width}</div>;
};

export default Divider;
