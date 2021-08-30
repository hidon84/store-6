import { FC } from 'react';
import ImageMagnifier from '../ImageMagnifier';

interface IProps {
  thumbnail: string;
  images: string[];
}

const ProductDetailImages: FC<IProps> = ({ thumbnail, images }) => {
  const imagesWithKey = images.map((image, imgIdx) => ({
    src: image,
    key: imgIdx,
  }));

  return (
    <>
      <ImageMagnifier
        key={`${thumbnail}-thumbnail`}
        imageSrc={thumbnail}
        imageAlt="product thumbnail"
      />
      {imagesWithKey.map((image) => (
        <ImageMagnifier
          key={`${image.src}-${image.key}`}
          imageSrc={image.src}
          imageAlt={`detail image ${image.key}`}
        />
      ))}
    </>
  );
};

export default ProductDetailImages;
