import React, { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Header = () => {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const menu = [
    { id: "home", label: "Главная" },
    { id: "products", label: "Что мы делаем" },
    { id: "ourStory", label: "Наша история" },
    { id: "projects", label: "Проекты" },
    { id: "contact", label: "Контакт" },

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

    window.addEventListener("scroll", handleScroll);
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
        <div className="max-w-[60px] h-[73px]">
          <a href="#home" aria-label="Home">
            <img
              src={Logo}
              alt="Company Logo"
              className="w-full h-full object-contain"
            />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex">
          <ul className="flex items-center gap-6 text-white text-[18px] font-medium">
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
                href="tel:+998909361795"
                className="hover:text-[#df6500] transition duration-300"
              >
                +998 90 936 17 95
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden z-[70]">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl focus:outline-none"
            aria-label="Toggle Menu"
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
          href="tel:+998909361795"
          onClick={() => setIsOpen(false)}
          className="px-2 py-[1.5px] rounded-xl bg-[#df6500] hover:bg-[#df640000] border border-[#df6500]"
        >
          +998 90 936 17 95
        </a>
      </div>
    </header>
  );
};

export default Header;
