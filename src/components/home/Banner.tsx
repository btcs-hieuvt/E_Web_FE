import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { BannerData, ListItemBanner } from "@/constants/DataBanner";

const Banner = ({ slides }: { slides: ListItemBanner[] }) => {
  return (
    <div className="w-full bg-slate-300">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="relative !h-[35vw] max-h-[80vh] min-h-[500px] object-cover [&_.swiper-button-next]:text-white [&_.swiper-button-prev]:text-white
         [&_.swiper-pagination-bullet]:!bg-[#ffffff5e]  [&_.swiper-pagination-bullet-active]:!bg-white"
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
            <div className="absolute bottom-[28%] left-[10%] text-white flex flex-col space-y-[8px]">
              <div className="text-4xl sm:text-5xl font-bold">
                {slide.title}
              </div>
              {slide.text && (
                <div className="text-sm sm:text-lg font-light max-w-[60%]">
                  {slide.text}
                </div>
              )}
              {/* <button>{slide.buttonText}</button> */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;
