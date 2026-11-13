import React from "react";
import images from "../../data/images";
import { useLanguage } from "../../contexts/LanguageContext";

const Products = () => {
  const { t } = useLanguage();
  return (
    <section
      id="products"
      className="bg-[#08162b] py-16 px-4 sm:px-6 lg:px-8"
      aria-labelledby="products-heading"
    >
      <div className="container mx-auto">
        <h2 id="products-heading" className="text-2xl md:text-3xl font-bold text-white mb-4">
          {t.products.heading}
        </h2>
        <p className="text-[#d3d3d3] max-w-3xl mb-10">{t.products.intro}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {t.products.items.map((product) => {
            const img = images[product.key];
            return (
              <article
                key={product.key}
                className="bg-white rounded-lg shadow-lg flex flex-col h-full hover:shadow-xl transition"
              >
                <img
                  src={img.src}
                  width={img.width}
                  height={img.height}
                  alt={product.alt}
                  className="w-full h-48 sm:h-52 object-cover rounded-t-lg"
                  loading="lazy"
                  decoding="async"
                />
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-base font-bold mb-2">{product.title}</h3>
                  <p className="text-sm text-gray-700 mb-3">{product.description}</p>
                  <ul className="text-sm text-gray-700 space-y-1 mb-4 flex-grow">
                    {product.specs.map(([label, value]) => (
                      <li key={label}>
                        <strong>{label}:</strong> {value}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="bg-[#df6500] text-white py-3 px-4 rounded text-center text-sm font-semibold hover:bg-[#c85b00] transition-colors"
                  >
                    {t.products.order}
                    <span className="sr-only"> — {product.title}</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Products;
