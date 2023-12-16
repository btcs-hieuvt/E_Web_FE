import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCube,
} from "swiper/modules";
import Image from "next/image";

const Banner = () => {
  const swiper = useSwiper();
  const slides = [
    {
      type: "video",
      source:
        "https://assets.corsair.com/video/upload/f_auto,ac_none,q_auto/q_auto/v1700520753/Homepage%20Assets/Hero-Banners/16x9_Xmas_Loop.mp4",
      title: "",
      text: "This is a video slide",
      buttonText: "Play",
    },
    {
      type: "video",
      source:
        "https://assets.corsair.com/video/upload/f_auto,ac_none,q_auto/q_auto/v1696541785/Homepage%20Assets/Hero-Banners/hp-hero-k70-core.mp4",
      title: "",
      text: "This is a video slide",
      buttonText: "Play",
    },
    {
      type: "video",
      source:
        "https://assets.corsair.com/video/upload/f_auto,ac_none,q_auto/q_auto/v1696358754/Homepage%20Assets/Hero-Banners/hp-hero-dominator-titanium.mp4",
      title: "",
      text: "This is a video slide",
      buttonText: "Play",
    },
    {
      type: "video",
      source:
        "https://assets.corsair.com/video/upload/f_auto,ac_none,q_auto/q_auto/v1697563750/Homepage%20Assets/Hero-Banners/hp-hero-platform6.mp4",

      title: "",
      text: "This is a video slide",
      buttonText: "Play",
    },
    {
      type: "video",
      source:
        "https://assets.corsair.com/video/upload/f_auto,ac_none,q_auto/q_auto/v1692390033/Homepage%20Assets/Hero-Banners/hp_icue-link-hx.mp4",
      title: "",
      text: "This is a video slide",
      buttonText: "Play",
    },
    {
      type: "image",
      source:
        "https://assets.corsair.com/image/upload/f_auto/q_auto/v1687871241/akamai/hybris/homepage/images/hero-banner/hp-hero-xeneon-27qhd240-oled.webp",
      title: "",
      text: "This is an image slide",
      buttonText: "Learn More",
    },
  ];

  return (
    <div className="w-full bg-slate-300">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCube]}
        slidesPerView={1}
        pagination
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="relative !h-[35vw] max-h-[80vh] min-h-[500px] object-cover"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative">
            {slide.type === "video" ? (
              <video
                src={slide.source}
                autoPlay
                loop
                playsInline
                preload={slide.source}
                className="w-full h-full block align-middle object-cover"
              />
            ) : (
              <Image
                src={slide.source}
                alt="slide"
                fill
                className="object-cover align-middle"
              />
            )}
            <div className="absolute bottom-6">
              <p>{slide.text}</p>
              <button>{slide.buttonText}</button>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute w-full px-5 flex justify-between">
          <button onClick={() => swiper.slidePrev()}>Prev</button>
          <button onClick={() => swiper.slideNext()}>Next</button>
        </div>
      </Swiper>
    </div>
  );
};

export default Banner;
