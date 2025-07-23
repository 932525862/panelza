import contact_img from "../../assets/contact.webp";
import contact_bg from "../../assets/contact.bg.jpg";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");

  const BOT_TOKEN = "8067486410:AAEdYSeZLTtkpFR9vQ83M0F2Gg6X4U08nwY";
  const CHAT_ID = "-1002871595342";

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    if (!value.startsWith("+998")) return;

    let raw = value.replace(/\D/g, "").slice(3); // +998 ni olib tashlab
    if (raw.length > 9) raw = raw.slice(0, 9);

    let formatted = "";
    if (raw.length > 0) formatted += raw.slice(0, 2);
    if (raw.length >= 3) formatted += " " + raw.slice(2, 5);
    if (raw.length >= 6) formatted += " " + raw.slice(5, 7);
    if (raw.length >= 8) formatted += " " + raw.slice(7, 9);

    setPhone("+998 " + formatted);
  };

  const sendMessage = async (e) => {
    e.preventDefault();
    const digits = phone.replace(/\D/g, "").slice(3);

    if (digits.length !== 9) {
      toast.error("Телефон номер введен не полностью!");
      return;
    }

    const formattedPhone =
      "+998 " + digits.replace(/(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4");
    const text = `📩 Новая заявка!\n\n👤 Имя: ${name}\n📞 Телефон: ${formattedPhone}`;

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
        toast.success("Успешно отправлено!");
        setName("");
        setPhone("+998 ");
      } else {
        toast.error("Ошибка при отправке! Проверьте токен или chat_id.");
      }
    } catch (err) {
      toast.error("Произошла ошибка!");
    }
  };

  return (
    <section
      id="contact"
      style={{ backgroundImage: `url(${contact_bg})` }}
      className="w-full h-[950px] min-[933px]:h-[550px] bg-cover bg-no-repeat relative py-7"
    >
      <div className="w-full h-full absolute top-0 left-0 z-1 bg-black/10 backdrop-blur-lg"></div>

      <div className="container h-full px-4 py-8 flex items-center justify-center lg:gap-8 flex-wrap absolute top-0 left-0 z-10">
        <form
          onSubmit={sendMessage}
          className="max-w-[400px] w-full space-y-4 p-5 bg-black/30 backdrop-blur-md rounded-lg shadow-xl shadow-[#e98c2248]"
        >
          <h2 className="text-2xl font-medium text-white text-center">
            Каталог с ценами и описанием каждой позиции
          </h2>
          <p className="text-center text-md font-medium text-white">
            Заполните форму и получите каталог нашей продукции
          </p>

          <input
            type="text"
            placeholder="Ваше имя"
            className="w-full border p-2 rounded bg-white outline-0"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="90 123 45 67"
            className="w-full border p-2 rounded bg-white outline-0"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={17}
            required
          />

          <button
            type="submit"
            className="bg-[#df6500] text-white hover:text-[#df6500] cursor-pointer px-4 py-2 rounded-md border-[1.5px] border-[#90450c] hover:bg-[#00000000] w-full duration-400"
          >
            Отправить
          </button>
        </form>

        <div className="w-full max-w-[500px]">
          <img src={contact_img} alt="contact" className="w-full" />
        </div>
      </div>
    </section>
  );
}

export default Contact;
