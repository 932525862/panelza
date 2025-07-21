import React from "react";
import wallMin from "../../assets/panel1.png";
import roofMin from "../../assets/panel2.png";
import wallPeno from "../../assets/panel3.png";
import roofPeno from "../../assets/panel4.png";

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
    narx: "2 200 000 сум",
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
    narx: "3 500 000 сум",
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
    narx: "3 000 000 сум",
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
    narx: "2 000 000 сум",
  },
];

const Products = () => {
  return (
    <section
      id="products"
      className="bg-[#08162b] py-16 md:px-8"
      aria-labelledby="products-heading"
    >
      <div className="container">
        <h2
          id="products-heading"
          className="text-2xl text-white md:text-3xl font-bold mb-10"
        >
          Наши Сэндвич-Панели
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-[#adadad] p-5 flex flex-col justify-between hover:shadow-md transition"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="object-contain mb-4 transform hover:scale-105 transition duration-300"
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
              <p className="text-[#df6500]">
                <strong className="text-black">Цена:</strong> {product.narx}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
