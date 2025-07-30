import React from "react";

const OurStory = () => {
  return (
    <section id="ourStory" className="bg-[#f5f5f5] py-20 px-2 md:px-5">
      <div className="container">
        {/* Text Section */}
        <div>
          <h1 className="text-5xl font-medium text-[#111] mb-2">
            Наша история — Уникальный путь развития в Узбекистане
          </h1>
          <hr className="max-w-[90px] border-[1.5px] mb-4 rounded-2xl border-[#df6500]" />
          <h2 className="text-3xl text-[#df6500] font-medium ">
           С 2016 года "Panelza" — надёжный производитель сэндвич-панелей для современного строительства по всему Узбекистану.
          </h2>
          <p className="text-md text-[#08162bce] leading-relaxed mt-6">
            С первого дня работы мы ориентированы на:
          </p>
          <ul className="list-disc pl-7 text-md text-[#08162bce] leading-relaxed">
            <li>Инновации в технологиях и производстве</li>
            <li>Безупречное качество на всех этапах</li>
            <li>Надёжность в сроках и исполнении заказов</li>
          </ul>

          <p className="text-md text-[#08162bce] leading-relaxed mt-6">
           Наш завод оснащён современным европейским оборудованием, которое позволяет изготавливать панели различных размеров и характеристик — быстро, точно и в больших объёмах.
          </p>

          <p className="text-md text-[#08162bce] leading-relaxed mt-6">
            Мы используем исключительно сертифицированные материалы, соответствующие международным стандартам. Каждая произведённая панель проходит строгий контроль качества, что гарантирует её прочность, теплоизоляцию и долговечность.
          </p>

          <p className="text-md text-[#08162bce] leading-relaxed mt-6">
            Нам доверяют как крупные строительные компании, так и частные застройщики по всему Узбекистану. Мы гордимся тем, что участвуем в создании зданий, которые служат людям десятилетиями и становятся частью архитектуры будущего.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
