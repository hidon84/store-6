import styled from 'styled-components';

const LabelRow = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 32px;
  align-items: center;
  justify-content: flex-start;
`;

const Label = styled.label`
  padding-left: 8px;
  font-size: 20px;
  line-height: 25px;
`;

const WarningMessage = styled.span`
  font-size: 12px;
  line-height: 15px;
  color: #ff9e2c;
`;

export default { LabelRow, Label, WarningMessage };
