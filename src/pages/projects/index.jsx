import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import images from "../../data/images";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { useLanguage } from "../../contexts/LanguageContext";

const RecentProjects = () => {
  const { t } = useLanguage();
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="w-full relative mt-[30px]" aria-labelledby="projects-heading">
      {/* Custom Navigation Buttons */}
        <div className="text-center mb-10">
            <h2 id="projects-heading" className="text-3xl md:text-4xl font-bold text-white">
              {t.projects.heading}
            </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
        </div>
     
      <div className="absolute top-[23%] min-[900px]:top-[24%] min-[1030px]:top-[32%] left-[20px] lg:left-[120px] z-20 flex gap-1">
        <button
          type="button"
          aria-label={t.projects.prev}
          ref={prevRef}
          className="bg-[#08162B] text-white shadow-lg rounded-[3px] transition w-[60px] h-[60px] flex justify-center items-center"
        >
          <MdOutlineKeyboardArrowLeft className="text-5xl" />
        </button>
        <button
          type="button"
          aria-label={t.projects.next}
          ref={nextRef}
          className="bg-[#df6500] text-white shadow-lg rounded-[3px] transition w-[60px] h-[60px] flex justify-center items-center"
        >
          <MdOutlineKeyboardArrowRight className="text-5xl" />
        </button>
      </div>

      <div className="w-full h-[600px] relative">
      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        loop={true}
        speed={1500}
        slidesPerView={1}
        className="w-full h-full"
      >
        {t.projects.items.map((project, i) => {
          const img = images[project.key];
          return (
          <SwiperSlide key={i}>
            <div className="relative w-full h-full flex items-end py-5">
              <img
                src={img.src}
                width={img.width}
                height={img.height}
                alt={project.alt}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className={`${
                  activeIndex === i
                    ? "animate__animated animate__fadeInRight"
                    : ""
                } relative bg-[#08162B] rounded-sm text-white p-5 mx-5 lg:ml-30 mb-5 max-w-[700px] min-h-[300px] transition-all duration-700`}
              >
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg italic">{project.location}</p>
                <p className="text-xl mt-2 font-normal">
                   {project.client}
                </p>
                <p className="text-lg font-normal">
                  {project.duration}
                </p>
                <p className="text-md mt-2">
                  {project.description}{" "}
                  <a href="#contact" className="underline text-orange-400">
                    {t.projects.more}
                  </a>
                </p>
              </div>
            </div>
          </SwiperSlide>
          );
        })}
      </Swiper>
      </div>
    </section>
  );
};

export default RecentProjects;
