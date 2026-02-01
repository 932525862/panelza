import React from "react";
import wallMin from "../../assets/panelzaSP.jpg";
import roofMin from "../../assets/new/new2.jpg";
import wallPeno from "../../assets/new/new3.jpg";
import roofPeno from "../../assets/DSC07859.jpg";

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
      className="bg-[#08162b] py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="products-heading"
    >
      <div className="container mx-auto">
        <h2
          id="products-heading"
          className="text-2xl md:text-3xl font-bold text-white mb-10"
        >
          Наши Сэндвич-Панели
        </h2>

        {/* RESPONSIVE GRID */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            xl:grid-cols-4
            gap-6
          "
        >
          {products.map((product, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg flex flex-col h-full hover:shadow-xl transition"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-48 sm:h-52 object-cover rounded-t-lg"
                loading="lazy"
              />

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-sm font-bold mb-3">
                  {product.title}
                </h3>

                <ul className="text-xs text-gray-700 space-y-1 mb-4 flex-grow">
                  {product.specs.map((spec, i) => (
                    <li key={i}>
                      <strong>{spec.label}:</strong> {spec.value}
                    </li>
                  ))}
                </ul>

                {/* <p className="text-[#df6500] mb-4 text-sm">
                  <strong className="text-black">Цена:</strong> {product.narx}
                </p> */}

                <a
                  href="#contact"
                  className="bg-[#df6500] text-white py-2 px-4 rounded text-center text-sm font-semibold hover:bg-[#c85b00] transition-colors"
                >
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
