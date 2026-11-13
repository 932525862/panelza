import React, { useEffect, useState } from "react";
import images from "../../data/images";
import translations, { LANGS, PHONE, PHONE_RAW } from "../../i18n/translations";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { useLanguage } from "../../contexts/LanguageContext";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language } = useLanguage();

  const menu = [
    { id: "home", label: t.menu.home },
    { id: "products", label: t.menu.products },
    { id: "features", label: t.menu.features },
    { id: "ourStory", label: t.menu.ourStory },
    { id: "projects", label: t.menu.projects },
    { id: "faq", label: t.menu.faq },
    { id: "contact", label: t.menu.contact },
  ];

  // Scroll active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = menu.map((item) => item.id);
      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const top = section.getBoundingClientRect().top;
          if (top <= 80 && top + section.offsetHeight > 80) {
            setActiveSection(id);
            break;
          }
        }
      }
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll block when menu open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[60] transition-all duration-300 ${
        scrolled
          ? "bg-[#08162bad] backdrop-blur-md shadow-md shadow-[#08162B]"
          : "bg-[#08162b]"
      }`}
    >
      <div className="container h-[90px] flex items-center justify-between relative z-[60]">
        {/* Logo */}
        <div className="w-[60px] h-[73px]">
          <a href={translations[language].path} aria-label="Panelza">
            <img
              src={images.logo.src}
              width={images.logo.width}
              height={images.logo.height}
              alt={t.common.logoAlt}
              className="w-full h-full object-contain"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex" aria-label={t.common.mainNav}>
          <ul className="flex items-center gap-3 xl:gap-6 text-white text-[15px] xl:text-[18px] font-medium">
            {menu.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`hover:text-[#df6500] transition duration-300 ${
                    activeSection === item.id
                      ? "text-[#df6500] border-b-[1.5px] border-[#df6500] rounded-b-xl px-[7px]"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="px-2 py-[1.5px] rounded-xl bg-[#df6500] hover:bg-[#df640000] border border-[#df6500]">
              <a
                href={`tel:${PHONE_RAW}`}
                className="hover:text-[#df6500] transition duration-300"
              >
                {PHONE}
              </a>
            </li>
          </ul>
        </nav>

        <div
          className="hidden lg:flex items-center gap-2 text-white ml-6"
          aria-label={t.common.switchLang}
        >
          {LANGS.map((code) => (
            <a
              key={code}
              href={translations[code].path}
              hrefLang={translations[code].htmlLang}
              lang={translations[code].htmlLang}
              aria-current={language === code ? "true" : undefined}
              className={`px-3 py-1 rounded-lg border transition text-sm font-semibold ${
                language === code
                  ? "bg-[#df6500] text-[#08162b] border-[#df6500]"
                  : "bg-transparent text-white border-white/30 hover:border-white"
              }`}
            >
              {code.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-[70]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
            aria-label={t.common.menuToggle}
            aria-expanded={isOpen}
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-[#08162bce] backdrop-blur-md 
        flex flex-col items-center justify-center text-white text-2xl font-semibold gap-10 
        transition-all duration-500 ease-in-out overflow-y-auto px-5
        ${
          isOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 pointer-events-none"
        }
        lg:hidden z-[55]`}
      >
        {menu.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setIsOpen(false)}
            className={`hover:text-[#df6500] transition text-center ${
              activeSection === item.id ? "text-[#df6500]" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
        <a
          href={`tel:${PHONE_RAW}`}
          onClick={() => setIsOpen(false)}
          className="px-2 py-[1.5px] rounded-xl bg-[#df6500] hover:bg-[#df640000] border border-[#df6500]"
        >
          {PHONE}
        </a>
        <div className="flex items-center gap-3 text-base">
          {LANGS.map((code) => (
            <a
              key={code}
              href={translations[code].path}
              hrefLang={translations[code].htmlLang}
              lang={translations[code].htmlLang}
              className={`px-4 py-2 rounded-lg border font-semibold ${
                language === code
                  ? "bg-[#df6500] text-[#08162b] border-[#df6500]"
                  : "border-white/30"
              }`}
            >
              {code.toUpperCase()}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
