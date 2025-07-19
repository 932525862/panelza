import React from "react";
import wallMin from "../../assets/zavod.png";
import roofMin from "../../assets/panel.png";
import wallPeno from "../../assets/lisa.png";
import roofPeno from "../../assets/texnika.png";

const products = [
  {
    image: wallMin,
    alt: "Стеновые СП из минеральной ваты",
    title: "Стеновые СП из минеральной ваты",
    specs: [
      { label: "Толщина", value: "50, 80, 100, 120, 150мм" },
      { label: "Плотность", value: "ρ=100кг/м3" },
      { label: "Толщина стали", value: "0,45мм" },
      { label: "Рабочая ширина", value: "1200мм" },
      {
        label: "Утеплитель",
        value: "Минеральная плита на базальтовой основе",
      },
    ],
  },
  {
    image: roofMin,
    alt: "Кровельные СП из минеральной ваты",
    title: "Кровельные СП из минеральной ваты",
    specs: [
      { label: "Толщина", value: "50, 80, 100, 120, 150мм" },
      { label: "Плотность", value: "ρ=100кг/м3" },
      { label: "Толщина стали", value: "0,45мм" },
      { label: "Рабочая ширина", value: "960мм" },
      { label: "Высота волны", value: "h-35" },
      {
        label: "Утеплитель",
        value: "Минеральная плита на базальтовой основе",
      },
    ],
  },
  {
    image: wallPeno,
    alt: "Стеновые СП из пенополистирольных плит",
    title: "Стеновые СП из пенополистирольных плит",
    specs: [
      { label: "Толщина", value: "50, 80, 100, 120, 150мм" },
      { label: "Плотность", value: "ρ=25кг/м3" },
      { label: "Толщина стали", value: "0,45мм" },
      { label: "Рабочая ширина", value: "1200мм" },
      { label: "Утеплитель", value: "Пенополистирольные плиты" },
    ],
  },
  {
    image: roofPeno,
    alt: "Кровельные СП из пенополистирольных плит",
    title: "Кровельные СП из пенополистирольных плит",
    specs: [
      { label: "Толщина", value: "50, 80, 100, 120, 150мм" },
      { label: "Плотность", value: "ρ=100кг/м3" },
      { label: "Толщина стали", value: "0,45мм" },
      { label: "Рабочая ширина", value: "960мм" },
      { label: "Высота волны", value: "h-35" },
      { label: "Утеплитель", value: "Пенополистирольные плиты" },
    ],
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="py-12 px-4 md:px-8 max-w-screen-xl mx-auto"
      aria-labelledby="products-heading"
    >
      <h2
        id="products-heading"
        className="text-2xl md:text-3xl font-bold text-center mb-10"
      >
        Наши Сэндвич-Панели
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow-md p-5 flex flex-col justify-between hover:shadow-lg transition"
          >
            <img
              src={product.image}
              alt={product.alt}
              className="h-[150px] object-contain mb-4"
              loading="lazy"
            />
            <h3 className="text-lg font-semibold text-center mb-3">
              {product.title}
            </h3>
            <ul className="text-sm text-gray-700 space-y-1 mb-4">
              {product.specs.map((spec, i) => (
                <li key={i}>
                  <strong>{spec.label}:</strong> {spec.value}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="bg-orange-500 hover:bg-orange-600 text-white text-sm text-center font-bold py-2 rounded-md transition block"
              aria-label={`Подробнее о ${product.title}`}
            >
              ПОДРОБНЕЕ
            </a>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Products;
