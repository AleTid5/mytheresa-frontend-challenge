import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import { Swiper, SwiperSlide } from "swiper/react";

SwiperCore.use([EffectCoverflow, Pagination]);

export default function CoverCarousel({ moviesPosters = [] }) {
  return moviesPosters.length > 0 ? (
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
      {moviesPosters.map((moviesPoster, key) => (
        <SwiperSlide key={key}>{moviesPoster}</SwiperSlide>
      ))}
    </Swiper>
  ) : null;
}
