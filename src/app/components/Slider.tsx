import Image from "next/image";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { SwiperRef } from "swiper/react";
import "swiper/swiper-bundle.css";

type Slide = {
  title: string;
  icon: string;
  description: string;
};

type SliderProps = {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  slides: Slide[];
  swiperRef: React.RefObject<SwiperRef>;
};

const Slider = ({
  activeIndex,
  setActiveIndex,
  slides,
  swiperRef,
}: SliderProps) => {
  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(activeIndex);
    }
  }, [activeIndex, swiperRef]);

  return (
    <div className="slider-container  w-full max-w-[2552px] mx-auto px-4  ">
      <Swiper
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        spaceBetween={16}
        observer={true}
        observeParents={true}
        breakpoints={{
          640: { slidesPerView: 1.5 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 2 },
          1360: { slidesPerView: 3 },
        }}
        className="mySwiper "
        ref={swiperRef}
      >
        {slides.map((slide, index) => (
          <SwiperSlide
            key={index}
            className="!w-[412px] !h-[256px] mb-6 bg-[#F0F0F0]"
          >
            <div
              className="w-[412px] h-[256px] p-6 gap-[60px] border shadow-md 
              rounded-lg flex flex-col justify-between  transition-shadow duration-300 ease-in-out hover:shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]"
            >
              <div className="w-full h-[208px] flex flex-col justify-between">
                <div className="flex items-center gap-6 ">
                  <Image
                    src={slide.icon}
                    width={80}
                    height={80}
                    alt={slide.title}
                    className="mb-8"
                  />
                  {/* Мобильная версия: показываем title */}
                  <p className="text-[32px] leading-[36px] font-normal md:hidden">
                    {slide.title}
                  </p>
                </div>
                {/* Мобильная версия: показываем описание */}
                <div className="mt-auto text-sm font-normal md:hidden">
                  {slide.description}
                </div>

                {/* Десктопная версия: показываем только description, затем title */}
                <div className="mt-auto md:text-[32px] md:leading-[36px] font-normal hidden ">
                  {slide.description}
                </div>
                <div className="mt-auto md:text-[32px] md:leading-[36px] font-normal hidden md:block">
                  {slide.title}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
