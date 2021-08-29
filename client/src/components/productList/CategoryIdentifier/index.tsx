/* eslint-disable @typescript-eslint/no-use-before-define */
import { FC, useContext } from 'react';
import {
  CategoryAllSVG,
  Hat2SVG,
  SmallBaedalSVG,
  SmallBookSVG,
  SmallColabSVG,
  SmallGiftSVG,
  SmallHouseSVG,
  SmallKKSVG,
  SmallPencilSVG,
  SmallTreeSVG,
} from '~/assets';

import FilterContext from '~/lib/contexts/filterContext';

import {
  IdentifierWrapper,
  PhotoIdentification,
  NameIdentification,
} from './index.style';

const CategoryIdentifier: FC = () => {
  const { state } = useContext(FilterContext);
  const categoryIndex = 'category' in state ? state.category : 0;

  return (
    <IdentifierWrapper>
      <PhotoIdentification
        src={CategoryPhoto[categoryIndex]}
        isImage={![5, 7].includes(categoryIndex)}
      />
      <NameIdentification>{CategoryName[categoryIndex]}</NameIdentification>
    </IdentifierWrapper>
  );
};

export default CategoryIdentifier;

const CategoryPhoto = {
  0: CategoryAllSVG,
  1: SmallBookSVG,
  2: SmallPencilSVG,
  3: SmallHouseSVG,
  4: SmallTreeSVG,
  5: SmallBaedalSVG,
  6: SmallKKSVG,
  7: Hat2SVG,
  8: SmallGiftSVG,
  9: SmallColabSVG,
};

enum CategoryName {
  '전체',
  '책',
  '문구',
  '리빙',
  '배민 그린',
  '배달이 친구들',
  'ㅋㅋ 에디션',
  '을지로 에디션',
  '선물 세트',
  '콜라보레이션',
}
