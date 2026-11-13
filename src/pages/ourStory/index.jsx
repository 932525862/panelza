import React from "react";
import { useLanguage } from "../../contexts/LanguageContext";

const OurStory = () => {
  const { t } = useLanguage();
  const s = t.ourStory;
  return (
    <section id="ourStory" className="bg-white py-20 px-2 md:px-5">
      <div className="container">
        <h2 className="text-3xl md:text-5xl font-medium text-[#111] mb-2">{s.heading}</h2>
        <hr className="max-w-[90px] border-[1.5px] mb-4 rounded-2xl border-[#df6500]" />
        <h3 className="text-2xl md:text-3xl text-[#df6500] font-medium">{s.subheading}</h3>
        <p className="text-md text-[#08162bce] leading-relaxed mt-6">{s.focusIntro}</p>
        <ul className="list-disc pl-7 text-md text-[#08162bce] leading-relaxed">
          {s.focus.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
        {s.paragraphs.map((p) => (
          <p key={p.slice(0, 30)} className="text-md text-[#08162bce] leading-relaxed mt-6">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
};

export default OurStory;
