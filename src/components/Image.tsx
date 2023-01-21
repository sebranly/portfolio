import * as React from 'react';
import { Image as ImageType, ImageFolder } from '../types';
import { getImageLink } from '../utils/urls';
import { useTranslation } from 'react-i18next';

export interface ImageProps {
  className?: string;
  folder: ImageFolder;
  image: ImageType;
}

const Image: React.FC<ImageProps> = (props) => {
  const { className, folder, image } = props;

  const { t } = useTranslation();
  const { alt, extension, nb } = image;
  const altText = t(alt);
  const src = getImageLink(folder, nb, extension);

  return <img className={className} alt={altText} loading='lazy' src={src} />;
};

export { Image };
