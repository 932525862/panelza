import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const Features = () => {
  const { t } = useLanguage();

  return (
    <section id="features" className="bg-[#f5f5f5] py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#08162b]">{t.features.sectionTitle}</h2>
          <div className="w-24 h-1 bg-[#df6500] mx-auto mt-4 rounded-full"></div>
          <p className="text-[#334155] max-w-3xl mx-auto mt-6">{t.features.intro}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {t.features.cards.map((card) => (
            <article key={card.title} className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-[#08162b] mb-3">{card.title}</h3>
              <p className="text-sm text-[#334155] leading-relaxed">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
