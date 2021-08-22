import { FC, useState } from 'react';
import {
  DownArrow,
  SubSectionDivider,
  TitleSection,
  Title,
  SubInfosWrapper,
} from './index.style';

interface SubInfoProps {
  title: string;
  infos: unknown;
  lastSubInfo?: boolean;
}

const SubInfos: FC<SubInfoProps> = ({ title, infos, lastSubInfo }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <SubInfosWrapper lastSubInfo={lastSubInfo}>
      <TitleSection>
        <Title>{title}</Title>
        <DownArrow />
      </TitleSection>
      {isOpened && <SubSectionDivider />}
      {/* infos */}
      {isOpened && !lastSubInfo && <SubSectionDivider />}
    </SubInfosWrapper>
  );
};

export default SubInfos;
