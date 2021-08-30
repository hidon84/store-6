import styled from 'styled-components';

const Policy = styled.pre`
  display: block;
  margin-top: 8px;
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  border-radius: 10px;
  overflow-y: scroll;
  width: 100%;
  padding: 10px 16px;
  box-sizing: border-box;
  height: 80px;
  font-family: 'noto sans', sans-serif !important;
  white-space: pre-line;
  color: #999;
  font-size: 12px;
  line-height: 1.5;
`;

const CheckboxSection = styled.section`
  width: 100%;
`;

const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: fit-content;
  margin-top: 32px;
  padding-left: 14px;
  cursor: pointer;
`;

export default { Policy, CheckboxSection, CheckboxWrapper };
