import * as React from 'react';
import { Image as ImageType, ImageFolder } from '../types';
import { getImageLink } from '../utils/urls';

export interface ImageProps {
  className?: string;
  folder: ImageFolder;
  image: ImageType;
}

const Image: React.FC<ImageProps> = (props) => {
  const { className, folder, image } = props;
  const { alt, extension, nb } = image;
  const src = getImageLink(folder, nb, extension);

  return <img className={className} alt={alt} src={src} />;
};

export { Image };
