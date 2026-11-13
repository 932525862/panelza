import React, { useState } from "react";
import images from "../../data/images";
import { useLanguage } from "../../contexts/LanguageContext";
import { PHONE, PHONE_RAW, EMAIL } from "../../i18n/translations";
import { toast } from 'sonner'


function Footer() {
  const { t } = useLanguage();
  const Logo = images.logo.src;
  const [phone, setPhone] = useState("+998");

   const BOT_TOKEN = "8067486410:AAEdYSeZLTtkpFR9vQ83M0F2Gg6X4U08nwY"; // o'zing bilan almashtir
  const CHAT_ID = "-1002871595342"; // o'zing bilan almashtir

  const sendMessage = async (e) => {
  e.preventDefault();

  const rawPhone = phone.replace("+998", "").replace(/\D/g, "");

  if (rawPhone.length !== 9) {
    toast.error(t.contact.phoneError);
    return;
  }

  const formattedPhone = "+998 " + rawPhone.replace(
    /(\d{2})(\d{3})(\d{2})(\d{2})/,
    "$1 $2 $3 $4"
  );

  const text = `📩 ${t.contact.leadTitle}\n📞 ${t.contact.leadPhone}: ${formattedPhone}\n🌐 ${window.location.href}`;

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
      toast.success(t.contact.success);
      setPhone("+998 "); // inputni tozalash
    } else {
      toast.error(t.contact.sendError);
    }
  } catch {
    toast.error(t.contact.sendError);
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
        <div>
          <a href="#home" aria-label="Panelza">
            <img className="w-[100px] h-[100px] object-contain" width={images.logo.width} height={images.logo.height} src={Logo} alt={t.common.logoAlt} loading="lazy" />
          </a>
          <address className="not-italic">
            <ul className="space-y-1 text-sm text-gray-300 mt-[15px]">
              <li className="hover:text-[#df6500]"><a href={`tel:${PHONE_RAW}`}>{PHONE}</a></li>
              <li className="hover:text-[#df6500]"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
              <li>{t.footer.address}</li>
            </ul>
          </address>
        </div>

        <nav aria-label={t.footer.pages}>
          <h2 className="font-semibold mb-2">{t.footer.pages}</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            <li><a href="#home" className="hover:underline">{t.menu.home}</a></li>
            <li><a href="#products" className="hover:underline">{t.menu.products}</a></li>
            <li><a href="#ourStory" className="hover:underline">{t.menu.ourStory}</a></li>
            <li><a href="#projects" className="hover:underline">{t.menu.projects}</a></li>
            <li><a href="#faq" className="hover:underline">{t.menu.faq}</a></li>
            <li><a href="#contact" className="hover:underline">{t.menu.contact}</a></li>
          </ul>
        </nav>

        <div>
          <h2 className="font-semibold mb-2">{t.footer.products}</h2>
          <ul className="space-y-1 text-sm text-gray-300">
            {t.footer.productLinks.map((label) => (
              <li key={label}><a href="#products" className="hover:underline">{label}</a></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <form onSubmit={sendMessage}>
            <h2 className="text-lg font-bold mb-2">{t.footer.contactTitle}</h2>
            <div className="flex items-center bg-white rounded">
              <input
                type="tel"
                name="phone"
                autoComplete="tel"
                inputMode="tel"
                aria-label={t.contact.phone}
                value={phone || "+998 "}
                onChange={handleInputChange}
                maxLength={17}
                placeholder={t.footer.quickPhone}
                className="w-full px-3 py-2 font-medium text-sm bg-transparent text-[#08162B] focus:outline-none"
              />
              <button type="submit" className="bg-[#df6500] text-white text-md px-4 py-2 rounded-r">
                {t.footer.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
      <p className="max-w-7xl mx-auto mt-8 text-xs text-gray-400">© {new Date().getFullYear()} Panelza. {t.footer.rights}</p>
    </footer>
  );
}

export default Footer;
