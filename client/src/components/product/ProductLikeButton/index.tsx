import { FC } from 'react';
import { LikeButton, LikeButtonContent } from './index.style';

interface Props {
  isLike: boolean;
  fillLineWhenHover?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ProductLikeButton: FC<Props> = ({
  isLike,
  fillLineWhenHover = false,
  onClick,
}) => {
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <LikeButton onClick={onClickHandler}>
      <LikeButtonContent
        isLike={isLike}
        fillLineWhenHover={fillLineWhenHover}
      />
    </LikeButton>
  );
};

export default ProductLikeButton;
