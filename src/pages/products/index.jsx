import React from "react";
import wallMin from "../../assets/panelzaSP.jpg";
import roofMin from "../../assets/new/new2.jpg";
import wallPeno from "../../assets/new/new3.jpg";
import roofPeno from "../../assets/new/new4.jpg";

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
      className="bg-[#08162b] py-16 md:px-8 "
      aria-labelledby="products-heading"
    >   
      <div className="container">
        <h2
          id="products-heading"
          className="text-2xl text-white md:text-3xl font-bold mb-10"
        >
          Наши Сэндвич-Панели
        </h2>
        <div className="grid grid-cols-4 gap-3">
          {products.map((product, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg flex flex-col h-full hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="object-cover h-[200px] rounded-t-lg w-full"
                loading="lazy"
              />
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-left mb-3 min-h-[50px] flex items-center">
                  {product.title}
                </h3>
                <ul className="text-xs text-gray-700 space-y-1 mb-4 flex-grow">
                  {product.specs.map((spec, i) => (
                    <li key={i}>
                      <strong>{spec.label}:</strong> {spec.value}
                    </li>
                  ))}
                </ul>
                <p className="text-[#df6500] mb-4 text-sm">
                  <strong className="text-black">Цена:</strong> {product.narx}
                </p>
                <a
                  href="#contact"
                  className="bg-[#df6500] text-white py-2 px-4 rounded text-center text-sm font-semibold hover:bg-[#c85b00] transition-colors">
                  Заказать
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      
    </section>
  );
};

export default Products;
