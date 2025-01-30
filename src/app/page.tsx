// pages/index.tsx
"use client";

import { useState, useRef } from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Subheader from "./components/Subheader";
import SliderNavigation from "./components/SliderNavigation";
import { SwiperRef } from "swiper/react";

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperRef>(null!);

  const slides = [
    {
      title: "Анализ текущего состояния карьеры",
      icon: "/1.jpg",
      description:
        "Проведем оценку вашего кейса и создадим стратегию для дальнейшего карьерного развития.",
    },
    {
      title: "Поиск работы",
      icon: "/2.jpg",
      description:
        "Поможем сформировать профессиональный портфель, которые выделит вас среди других кандидатов.",
    },
    {
      title: "Сопроводительные письма и резюме",
      icon: "/3.jpg",
      description:
        "Определим вашу карьерную цель и разработаем стратегию для трудоустройства. ",
    },
    {
      title: "Тренинг по презентации личного бренда",
      icon: "/4.jpg",
      description:
        "Подсветим сильные стороны и грамотно выстроим самопрезентацию.",
    },
    {
      title: "Подготовка к собеседованию",
      icon: "/5.jpg",
      description: "Научим говорить о себе кратко, ярко и профессионально.",
    },
    {
      title: "Рекомендация по базе STEMPS Career",
      icon: "/6.jpg",
      description: "Поможем встретиться соискателю и работодателю. ",
    },
  ];
  return (
    <div className="max-w-[1728px] mx-auto h-[718px] opacity-100  top-[595px] left-[3495px]">
      <Header />
      <Subheader />
      <SliderNavigation
        activeIndex={activeIndex}
        slides={slides}
        swiperRef={swiperRef}
      />
      <Slider
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        slides={slides}
        swiperRef={swiperRef}
      />
    </div>
  );
}
