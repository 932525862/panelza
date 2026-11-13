import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

// FAQ matni sahifada ochiq ko'rinadi va xuddi shu manba JSON-LD (FAQPage) ga ham yoziladi.
const Faq = () => {
  const { t } = useLanguage();
  return (
    <section id="faq" className="bg-[#f5f5f5] py-20 px-4 sm:px-6 lg:px-8" aria-labelledby="faq-heading">
      <div className="container mx-auto max-w-4xl">
        <h2 id="faq-heading" className="text-3xl md:text-4xl font-bold text-[#08162b] text-center">
          {t.faq.heading}
        </h2>
        <div className="w-24 h-1 bg-[#df6500] mx-auto mt-4 mb-10 rounded-full"></div>
        <div className="space-y-4">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group bg-white rounded-xl shadow p-5" open>
              <summary className="cursor-pointer list-none font-semibold text-[#08162b] text-lg flex justify-between gap-4">
                <h3 className="text-lg font-semibold">{item.q}</h3>
                <span aria-hidden="true" className="text-[#df6500] group-open:rotate-45 transition-transform text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-[#334155] leading-relaxed">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
