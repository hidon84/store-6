import { FC } from 'react';
import {
  Line,
  LineWrapper,
  StyledSubPageHeader,
  StyledSubPageHeaderInner,
  SubPageHeaderWrap,
} from './index.style';

interface Props {
  width?: string;
}

const SubPageHeader: FC<Props> = ({ children, width }) => {
  return (
    <StyledSubPageHeader width={width}>
      <StyledSubPageHeaderInner>
        <SubPageHeaderWrap>{children}</SubPageHeaderWrap>
        <LineWrapper>
          <Line />
        </LineWrapper>
      </StyledSubPageHeaderInner>
    </StyledSubPageHeader>
  );
};

export default SubPageHeader;
