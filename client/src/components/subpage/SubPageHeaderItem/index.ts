import styled from 'styled-components';

interface Props {
  isSelected?: boolean;
}

const SubPageHeaderItem = styled.div<Props>`
  color: ${({ isSelected = true }) => (isSelected ? '#000' : '#ccc')};
  cursor: pointer;
`;

export default SubPageHeaderItem;
