import * as React from 'react';
import { ProjectImages } from '../types';
import { Swiper as SwiperContainer, SwiperSlide } from 'swiper/react';
import { Image as ImageType } from '../types';
import { getSlideDuration } from '../utils';
import { Image } from './Image';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../index.css';

import { Autoplay, Pagination, Navigation } from 'swiper';

export interface SwiperProps {
  className?: string;
  projectImages: ProjectImages;
}

const Swiper: React.FC<SwiperProps> = (props) => {
  const { className, projectImages } = props;
  if (!projectImages) return null;

  const { folder, images } = projectImages;
  if (images.length <= 1) return null;

  const duration = getSlideDuration(images.length);

  return (
    <div className="sm:w-full w-80 mx-auto mb-2">
      <SwiperContainer
        className={className}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: duration,
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
    </div>
  );
};

export { Swiper };
