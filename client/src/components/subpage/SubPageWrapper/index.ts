import styled from 'styled-components';

const SubPageWrapper = styled.div<{ width?: string }>`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 0 auto;
  margin-top: 90px;
  width: ${({ width = '100%' }) => width};
`;

export default SubPageWrapper;
