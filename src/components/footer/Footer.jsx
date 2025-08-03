import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { toast } from 'sonner'


function Footer() {
  const [phone, setPhone] = useState("+998");

   const BOT_TOKEN = "8067486410:AAEdYSeZLTtkpFR9vQ83M0F2Gg6X4U08nwY"; // o'zing bilan almashtir
  const CHAT_ID = "-1002871595342"; // o'zing bilan almashtir

  const sendMessage = async (e) => {
  e.preventDefault();

  const rawPhone = phone.replace("+998", "").replace(/\D/g, "");

  if (rawPhone.length !== 9) {
    toast.error("Telefon raqami to‘liq emas!");
    return;
  }

  const formattedPhone = "+998 " + rawPhone.replace(
    /(\d{2})(\d{3})(\d{2})(\d{2})/,
    "$1 $2 $3 $4"
  );

  const text = `📩 Yangi ariza!\n📞 Tel: ${formattedPhone}`;

  try {
    const response = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text }),
      }
    );

    const data = await response.json();
    if (data.ok) {
      toast.success("Muvaffaqiyatli yuborildi!");
      setPhone("+998 "); // inputni tozalash
    } else {
      toast.error("Xabar yuborilmadi! Token yoki chat_id xato bo'lishi mumkin.");
    }
  } catch (err) {
    toast.error("Xatolik yuz berdi!");
  }
};



  const handleInputChange = (e) => {
    let value = e.target.value;

    // +998 ni olib tashlamoqchi bo‘lsa, to‘xtatamiz
    if (!value.startsWith("+998")) return;

    // +998 ni olib tashlaymiz va qolgan qism bilan ishlaymiz
    let raw = value.replace(/\D/g, "").slice(3); // faqat raqam, +998 ni olib tashlab

    // 9 ta raqamdan oshib ketmasin
    if (raw.length > 9) raw = raw.slice(0, 9);

    // Format: 00 000 00 00
    let formatted = "";
    if (raw.length > 0) formatted += raw.slice(0, 2);
    if (raw.length >= 3) formatted += " " + raw.slice(2, 5);
    if (raw.length >= 6) formatted += " " + raw.slice(5, 7);
    if (raw.length >= 8) formatted += " " + raw.slice(7, 9);

    setPhone("+998 " + formatted);
  };
  return (
    <footer className="bg-[#08162B] text-white py-10 px-5">
      <div className="max-w-7xl mx-auto grid max-md:grid-cols-2 max-sm:grid-cols-1 md:grid-cols-5 gap-8">
        {/* Company */}
        <div>
          <a href="#home"><img className="w-[100px] h-[100px]" src={Logo} alt="Logo" /></a>
          <ul className="space-y-1 text-sm text-gray-300 mt-[15px]">
            <li className="hover:text-[#df6500]"><a href="tel:+998909361795">+998 77 408 00 05</a></li>
            <li className="hover:text-[#df6500]"><a href="mailto:panelzagroup@gmail.com">panelzagroup@gmail.com</a></li>
            <li className="hover:text-[#df6500]">Адрес: МФЙ Гульбог, улица Зиё Нур </li>
            
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
          <form onSubmit={sendMessage}>
  <h3 className="text-lg font-bold mb-2">Контакт</h3>
          <div className="flex items-center bg-white rounded">
            <input
              type="text"
              value={phone || "+998 "}
              onChange={handleInputChange}
              maxLength={17} // +998 00 000 00 00 = 17 ta belgidan oshmasin
              placeholder="введите свой номер"
              className="w-full px-3 py-2 font-medium text-sm bg-transparent text-[#08162B] focus:outline-none"
            />
            <button type="submit" className="bg-[#df6500] text-white text-md px-4 py-2 rounded-r">
              Отправить
            </button>
          </div>
          </form>
        
        </div>
      </div>

  {/* Bottom line */}
  {/* <div className="mt-10 border-t border-gray-600 pt-4 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
    <p>Copyright ©2022</p>
    <div className="flex gap-4 mt-2 md:mt-0">
      <i className="fab fa-facebook-f">tel</i>
      <i className="fab fa-twitter">tel</i>
      <i className="fab fa-instagram">tel</i>
      <i className="fab fa-linkedin-in">tel</i>
    </div>
  </div> */}
</footer>

  );
}

export default Footer;
