import { FC } from 'react';
import {
  DownArrow,
  SubSectionDivider,
  TitleSection,
  Title,
} from './index.style';

interface SubInfoProps {
  title: string;
  infos: unknown;
  lastSubInfo?: boolean;
}

const SubInfos: FC<SubInfoProps> = ({ title, infos, lastSubInfo }) => {
  return (
    <div>
      <TitleSection>
        <Title>{title}</Title>
        <DownArrow />
      </TitleSection>
      <SubSectionDivider />
      {/* infos */}
      {!lastSubInfo && <SubSectionDivider />}
    </div>
  );
};

export default SubInfos;
