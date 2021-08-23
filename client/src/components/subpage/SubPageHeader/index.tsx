import { FC } from 'react';
import Divider from '~/components/common/Divider';
import { StyledSubPageHeader, SubPageHeaderWrap } from './index.style';

const SubPageHeader: FC = ({ children }) => {
  return (
    <StyledSubPageHeader>
      <SubPageHeaderWrap>{children}</SubPageHeaderWrap>
      <Divider width="770px" direction="horizontal" thick />
    </StyledSubPageHeader>
  );
};

export default SubPageHeader;
