import images from "../../data/images";
import { useLanguage } from "../../contexts/LanguageContext";

// Bu sahifadagi YAGONA <h1>. Asosiy kalit so'z (sendvich panel) shu yerda.
function Home() {
  const { t } = useLanguage();
  const { hero } = images;
  return (
    <section id="home" className="relative min-h-[670px] pt-[150px] pb-24 overflow-hidden">
      <img
        src={hero.src}
        width={hero.width}
        height={hero.height}
        alt={t.home.heroAlt}
        fetchpriority="high"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover max-[770px]:object-center"
      />
      <div className="z-10 absolute top-0 left-0 w-full h-full bg-black/60"></div>
      <div className="container relative z-20">
        <div className="max-w-full min-[1030px]:max-w-[70%] flex flex-col">
          <h1 className="text-white text-3xl max-[550px]:text-[24px] min-[1030px]:text-5xl font-medium leading-tight">
            {t.home.h1} <span className="text-[#df6500]">{t.home.h1Accent}</span>
          </h1>
          <p className="text-white text-lg min-[1030px]:text-2xl mt-7">{t.home.subtitle}</p>
          <p className="text-[#d3d3d3] text-base min-[1030px]:text-xl mt-5">{t.home.description}</p>
          <a
            href="#contact"
            className="mt-8 self-start bg-[#df6500] text-white font-semibold px-7 py-3 rounded-md border-[1.5px] border-[#df6500] hover:bg-transparent hover:text-[#df6500] transition-colors duration-300"
          >
            {t.home.cta}
          </a>
          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            {t.home.stats.map((s) => (
              <li key={s.label} className="border-l-2 border-[#df6500] pl-4">
                <span className="block text-white text-2xl font-bold">{s.value}</span>
                <span className="block text-[#d3d3d3] text-sm">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#061a3a] z-[15]"></div>
    </section>
  );
}

export default Home;
