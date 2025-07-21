import contact_img from "../../assets/contact.webp";
import contact_bg from "../../assets/contact.bg.jpg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const BOT_TOKEN = "123456789:AAH-sample-token-abc123";
  const CHAT_ID = "123456789";

  const sendMessage = async (e) => {
    e.preventDefault();

    const text = `📩 Новая заявка!\n\n👤 Имя: ${name}\n📞 Телефон: ${phone}`;

    try {
      await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: CHAT_ID,
          text,
        }),
      });

      toast.success("Сообщение успешно отправлено!");
      setName("");
      setPhone("");
    } catch (err) {
      toast.error("Ошибка при отправке сообщения.");
    }
  };

  return (
    <section
      id="contact"
      style={{ backgroundImage: `url(${contact_bg})` }}
      className="w-full h-[80dvh] md:h-[60dvh] lg:h-[90dvh] bg-cover bg-no-repeat relative"
    >
      <div className="w-full h-full absolute top-0 left-0 z-1 bg-black/10 backdrop-blur-lg"></div>

      <div className="container px-4 py-8 flex items-center justify-center gap-8 flex-wrap absolute top-0 left-0 z-10">
        <form
          onSubmit={sendMessage}
          className="max-w-[300px] w-full space-y-4 p-5 bg-black/30 backdrop-blur-md rounded-lg shadow-xl shadow-[#e98c2248]"
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
            type="number"
            placeholder="Телефон"
            className="w-full border p-2 rounded bg-white outline-0"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#df6500] text-white px-4 py-2 rounded hover:bg-[#90450c] w-full duration-300"
          >
            Отправить
          </button>
        </form>

        <div className="w-full max-w-[500px]">
          <img src={contact_img} alt="contact" className="w-full" />
        </div>
      </div>

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}

export default Contact;
