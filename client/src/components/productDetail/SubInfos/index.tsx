import { FC, useRef, useState } from 'react';
import styled from 'styled-components';
import {
  DownArrow,
  SubSectionDivider,
  TitleSection,
  Title,
  SubInfosWrapper,
  InfoList,
  InfoTerms,
  InfoDescription,
} from './index.style';

interface SubInfoProps {
  title: string;
  infos: Record<string, string>;
  lastSubInfo?: boolean;
}
const SubInfos: FC<SubInfoProps> = ({ title, infos, lastSubInfo }) => {
  const [isOpened, setIsOpened] = useState(false);

  return (
    <SubInfosWrapper
      lastSubInfo={lastSubInfo}
      onClick={() => setIsOpened((prev) => !prev)}
    >
      <TitleSection>
        <Title>{title}</Title>
        <DownArrow isOpened={isOpened} />
      </TitleSection>

      <InfoList isOpened={isOpened}>
        <SubSectionDivider isUpperDivider />
        {Object.entries(infos).map(([key, val]) => (
          <div key={key}>
            <InfoTerms>{key}</InfoTerms>
            <InfoDescription>{val}</InfoDescription>
          </div>
        ))}
        {!lastSubInfo && <SubSectionDivider />}
      </InfoList>
    </SubInfosWrapper>
  );
};

export default SubInfos;
