import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import project1 from "../../assets/project1.jpg";
import project2 from "../../assets/project2.jpg";
import project3 from "../../assets/project1.jpg";
import project4 from "../../assets/project3.jpg";

import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const projectData = [
  {
    title: "Ньюлендс Роуд, Лутон",
    location: "Лутон",
    client: "Wrenbridge",
    duration: "63 недели",
    description:
      "Проект Junction Gateway в Лутоне — это логистический центр площадью 19 860 м², реализованный компанией Glencar для Wrenbridge.",
    image: project1,
    link: "#",
  },
  {
    title: "Промышленный парк Темзы",
    location: "Лондон",
    client: "Группа XYZ",
    duration: "45 недель",
    description:
      "Один из крупнейших проектов реконструкции промышленных зон в Великобритании, превращённый в центр логистики и производства.",
    image: project2,
    link: "#",
  },
  {
    title: "МегаХаб Вест",
    location: "Манчестер",
    client: "BuildCorp",
    duration: "55 недель",
    description:
      "Стратегически расположенный логистический центр с высокой энергоэффективностью и современной архитектурой.",
    image: project3,
    link: "#",
  },
  {
    title: "ЭкоЛогистик Парк",
    location: "Бирмингем",
    client: "EcoGroup",
    duration: "40 недель",
    description:
      "Экологически чистый логистический объект, построенный с использованием устойчивых строительных технологий.",
    image: project4,
    link: "#",
  },
];

const RecentProjects = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="projects" className="w-full h-[600px] relative">
      {/* Custom Navigation Buttons */}
      <div className="absolute top-[23%] min-[900px]:top-[24%] min-[1030px]:top-[32%] left-[20px] lg:left-[120px] z-20 flex gap-1">
        <button
          ref={prevRef}
          className="bg-[#08162B] text-white shadow-lg rounded-[3px] transition w-[60px] h-[60px] flex justify-center items-center"
        >
          <MdOutlineKeyboardArrowLeft className="text-5xl" />
        </button>
        <button
          ref={nextRef}
          className="bg-[#df6500] text-white shadow-lg rounded-[3px] transition w-[60px] h-[60px] flex justify-center items-center"
        >
          <MdOutlineKeyboardArrowRight className="text-5xl" />
        </button>
      </div>

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
        {projectData.map((project, i) => (
          <SwiperSlide key={i}>
            <div
              className="w-full h-full bg-cover bg-center flex items-end py-5"
              style={{ backgroundImage: `url(${project.image})` }}
            >
              <div
                className={`${
                  activeIndex === i
                    ? "animate__animated animate__fadeInRight"
                    : ""
                } bg-[#08162B] rounded-sm text-white p-5 mx-5 lg:ml-30 mb-5 max-w-[700px] h-[350px] lg:h-[300px] transition-all duration-700`}
              >
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg italic">{project.location}</p>
                <p className="text-xl mt-2">
                  <strong>Клиент:</strong> {project.client}
                </p>
                <p className="text-lg">
                  <strong>реализации:</strong> {project.duration}
                </p>
                <p className="text-md mt-2">
                  {project.description}{" "}
                  <a href={project.link} className="underline text-orange-400">
                    читать далее
                  </a>
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default RecentProjects;
