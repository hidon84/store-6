import { FC } from 'react';
import { SubPageUnderlineSVG } from '~/assets';
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
          <Line src={SubPageUnderlineSVG} alt="line to divide" />
        </LineWrapper>
      </StyledSubPageHeaderInner>
    </StyledSubPageHeader>
  );
};

export default SubPageHeader;
