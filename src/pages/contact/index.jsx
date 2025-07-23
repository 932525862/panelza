import contact_img from "../../assets/contact.webp";
import contact_bg from "../../assets/contact.bg.jpg";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const BOT_TOKEN = "8067486410:AAEdYSeZLTtkpFR9vQ83M0F2Gg6X4U08nwY"; // o'zing bilan almashtir
  const CHAT_ID = "-1002871595342"; // o'zing bilan almashtir

  const sendMessage = async (e) => {
    e.preventDefault();
    if (phone.length !== 9) {
      toast.error("Telefon raqami to‘liq emas!");
      return;
    }
    const formattedPhone = `+998${phone}`;
    const text = `📩 Yangi ariza!\n\n👤 Ism: ${name}\n📞 Tel: ${formattedPhone}`;

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
        setName("");
        setPhone("");
        // onClose(); // bu yo‘q yoki kerak bo‘lmasa o‘chirib tashla
      } else {
        toast.error(
          "Xabar yuborilmadi! Token yoki chat_id xato bo'lishi mumkin."
        );
      }
    } catch (err) {
      toast.error("Xatolik yuz berdi!");
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
          <div className="bg-white rounded p-2 border flex items-center gap-1">
            <span>+998</span>
          <input
            type="number"
            placeholder="941234567"
            className="w-full outline-0"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          </div>
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

      {/* Toast container */}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
}

export default Contact;
