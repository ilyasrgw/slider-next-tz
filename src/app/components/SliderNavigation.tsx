import type { SwiperRef } from "swiper/react";

type SliderNavigationProps = {
  activeIndex: number;
  slides: Array<{ title: string; icon: string; description: string }>;
  swiperRef: React.RefObject<SwiperRef>;
};

const SliderNavigation = ({
  slides,
  activeIndex,
  swiperRef,
}: SliderNavigationProps) => {
  const handleClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="pagination-container flex  gap-2 mx-4 w-[120px]   mt-8 mb-6 md:hidden">
      {slides.map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer  ${
            activeIndex === index ? "tablet-indicator" : "bg-gray-300"
          }`}
          onClick={() => handleClick(index)}
        />
      ))}

      <style jsx>{`
        .tablet-indicator {
          background: linear-gradient(to right, black 50%, gray 50%);
          width: 40px;
          height: 8px;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default SliderNavigation;
