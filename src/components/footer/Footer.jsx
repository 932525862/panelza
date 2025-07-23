import React from "react";
import Logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-[#08162B] text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid max-md:grid-cols-2 max-sm:grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company */}
        <div>
          <img className="w-[100px] h-[100px]" src={Logo} alt="Logo" />
          <ul className="space-y-1 text-sm text-gray-300 mt-[15px]">
            <li className="hover:text-[#df6500]"><a href="tel:+998 77 408 00 05">+998 77 408 00 05</a></li>
            <li className="hover:text-[#df6500]"><a href="mailto:panelzagroup@gmail.com">panelzagroup@gmail.com</a></li>
            <li className="hover:text-[#df6500]">Адрес Ташкент Адрес Ташкент </li>
            
          </ul>
        </div>

        {/* page */}
       <div>
  <h3 className="font-semibold mb-2">Pages</h3>
  <ul className="space-y-1 text-sm text-gray-300">
    <li><a href="#home" className="hover:underline">Главная</a></li>
    <li><a href="#products" className="hover:underline">Что мы делаем</a></li>
    <li><a href="#ourStory" className="hover:underline">Наша история</a></li>
    <li><a href="#projects" className="hover:underline">Проекты</a></li>
    <li><a href="#studies" className="hover:underline">Кейсы</a></li>
  </ul>
</div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-2">Продукты</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#products">Стеновые СП</a></li>
            <li><a href="#products">Кровельные СП</a></li>
            <li><a href="#products">Стеновые СП</a></li>
            <li><a href="#products">Кровельные СП</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-2">
          <h3 className="text-lg font-bold mb-2">Контакт</h3>
          <div className="flex items-center bg-white rounded">
            <input
              type="text"
              placeholder="введите свой номер"
              className="w-full px-3 py-2 text-sm bg-transparent text-[#08162B] focus:outline-none"
            />
            <button className="bg-[#df6500] text-white text-md px-4 py-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>

  {/* Bottom line */}
  <div className="mt-10 border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
    <p>Copyright ©2022</p>
    <div className="flex gap-4 mt-2 md:mt-0">
      <i className="fab fa-facebook-f">tel</i>
      <i className="fab fa-twitter">tel</i>
      <i className="fab fa-instagram">tel</i>
      <i className="fab fa-linkedin-in">tel</i>
    </div>
  </div>
</footer>

  );
}

export default Footer;
