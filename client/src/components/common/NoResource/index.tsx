import { FC } from 'react';
import {
  NoResourceWrapper,
  NoResourceImage,
  NoResourceContent,
} from './index.style';

interface IProps {
  content: string;
}

const NoResource: FC<IProps> = ({ content }) => {
  return (
    <NoResourceWrapper>
      <NoResourceImage />
      <NoResourceContent>{content}</NoResourceContent>
    </NoResourceWrapper>
  );
};

export default NoResource;
