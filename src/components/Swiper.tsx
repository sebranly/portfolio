import * as React from 'react';
import { ProjectImages } from '../types';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import { Image as ImageType } from '../types';
import { Image } from './Image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

import { Autoplay, Pagination, Navigation } from 'swiper';
import { IMG_AUTOPLAY_DURATION } from '../constants/general';

export interface SwiperProps {
  className?: string;
  projectImages: ProjectImages;
}

const Swiper: React.FC<SwiperProps> = (props) => {
  const { className, projectImages } = props;
  if (!projectImages) return null;

  const { folder, images } = projectImages;
  if (images.length <= 1) return null;

  return (
    <SwiperContainer
      className={className}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: IMG_AUTOPLAY_DURATION,
        disableOnInteraction: false
      }}
      pagination={{
        clickable: true
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {images.map((image: ImageType) => {
        return (
          <SwiperSlide key={image.alt}>
            <Image folder={folder} image={image} />
          </SwiperSlide>
        );
      })}
    </SwiperContainer>
  );
};

export { Swiper };
