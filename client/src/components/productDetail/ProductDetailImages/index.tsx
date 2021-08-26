import { FC } from 'react';
import ImageMagnifier from '../ImageMagnifier';

interface IProps {
  thumbnail: string;
  images: string[];
}

const ProductDetailImages: FC<IProps> = ({ thumbnail, images }) => {
  return (
    <>
      <ImageMagnifier
        key={thumbnail}
        imageSrc={thumbnail}
        imageAlt="product thumbnail"
      />
      {images.map((image, imgIdx) => (
        <ImageMagnifier
          key={image}
          imageSrc={image}
          imageAlt={`detail image ${imgIdx}`}
        />
      ))}
    </>
  );
};

export default ProductDetailImages;
