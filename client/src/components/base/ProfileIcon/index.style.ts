import styled from 'styled-components';

export const UserInteractDropdown = styled.div`
  z-index: 1;
  opacity: 1;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  top: 50px;
  right: -10px;
  width: 100px;
  height: 120px;
  background: #fff;
  border: 1px solid #999999;
  box-sizing: border-box;
  border-radius: 15px;

  &:before {
    content: '';
    position: absolute;
    top: -8px;
    right: 14px;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-bottom: 6px solid #999;
  }

  &:after {
    content: '';
    position: absolute;
    top: -7px;
    right: 15px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-bottom: 6px solid #fff;
  }
`;

export const InteractSpan = styled.span`
  display: block;
  width: 60px;
  height: 20px;
  text-align: left;
  font-size: 15px;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: var(--baemin100);
  }
`;
