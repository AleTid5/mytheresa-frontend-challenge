import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([EffectCoverflow, Pagination]);

export default function CoverCarousel({ images = [] }) {
  return images.length > 0 ? (
    <Swiper
      effect="coverflow"
      slidesPerView="auto"
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination
      loop
      grabCursor
      centeredSlides
    >
      {images.map((image) => (
        <SwiperSlide key={image}>
          <img src={image} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  ) : null;
}
