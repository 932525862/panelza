import { useState } from "react";
import { toast } from "react-toastify";
import Panel from "../../assets/new/new3.jpg";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../../assets/panelzalogo.png";


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
      className="w-full h-auto lg:h-[650px] min-[633px]:h-[550px] bg-no-repeat relative py-7"
    >
      {/* Background image only on large screens */}
      <div
        className="hidden lg:block absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${Panel})` }}
      />
      <div className="hidden lg:block w-full h-full absolute top-0 left-0 z-10 bg-black/20"></div>

      {/* Mobile header (visible on small screens) */}
      <div className="lg:hidden w-full bg-[#071b3a] text-white py-8 px-6">
        <div className="max-w-screen-sm mx-auto">
          <img src={Logo} alt="logo" className="w-40 mx-auto mb-4" />
          <h1 className="text-5xl font-bold">Каталог</h1>
          <div className="w-28 h-1 bg-white my-4"></div>
          <p className="text-lg font-medium max-w-md">Завод по производству сэндвич панелей</p>
        </div>
      </div>

      {/* Mobile image shown under header */}
      <img src={Panel} alt="panel" className="w-full lg:hidden object-cover h-56" />

      <div className="container h-auto px-4 py-8 pb-28 flex items-center justify-center lg:absolute top-0 left-0 z-20">
        <div className="w-full flex flex-wrap items-center">
          <div className="hidden lg:flex w-full lg:w-1/2 px-6 flex-col items-start justify-center text-white py-8 transform lg:-translate-y-12 lg:pl-20">
            <img src={Logo} alt="logo" className="w-48 lg:w-56 mb-5" />
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold">Каталог</h1>
            <div className="w-32 lg:w-36 h-1 bg-white my-4"></div>
            <p className="text-base lg:text-xl font-medium max-w-lg">Завод по производству сэндвич панелей</p>
          </div>

          <div className="w-full lg:w-1/2 px-6 flex items-center justify-center lg:justify-end py-8">
            <form
              onSubmit={sendMessage}
              className="mt-6 max-w-[420px] w-full space-y-6 p-8 bg-black/60 rounded-lg shadow-xl shadow-[#00000066] relative z-30 mb-8 lg:mb-0"
            >
              <h2 className="text-2xl font-medium text-white text-center lg:text-left">
                Каталог с ценами и описанием каждой позиции
              </h2>
              <p className="text-center lg:text-left text-md font-medium text-white">
                Заполните форму и получите каталог нашей продукции
              </p>

              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full border p-3 rounded bg-white outline-0"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />

              <input
                type="text"
                placeholder="+998 90 123 45 67"
                className="w-full border p-3 rounded bg-white outline-0"
                value={phone}
                onChange={handlePhoneChange}
                maxLength={17}
                required
              />

              <button
                type="submit"
                className="bg-[#df6500] text-white hover:text-[#df6500] cursor-pointer px-4 py-3 rounded-md border-[1.5px] border-[#90450c] hover:bg-transparent w-full duration-400"
              >
                Отправить
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
