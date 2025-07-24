import { useEffect, useState } from "react";
import { BsVimeo } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";

function StickyContactBar() {
  const [isAtFooter, setIsAtFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const footerTop = footer?.getBoundingClientRect().top || 0;
      const windowHeight = window.innerHeight;

      // Faqat footer ekranga ko‘ringanda yashir
      setIsAtFooter(footerTop <= windowHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-40 transition-all duration-400 ease-in-out 
        ${
          isAtFooter
            ? "translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
    >
      <div className="bg-[#f8f3f3] border-t border-gray-300 shadow-md flex items-center justify-between px-5">
        <div className="h-[35px] px-4 flex items-center justify-between gap-3 text-sm">
          <p className="text-gray-700 font-medium">Contact us on:</p>
          <a href="tel:02077706900" className="text-[#df6500] hover:underline">
            0207 770 6900
          </a>
          <a
            href="mailto:enquiries@glencar.com"
            className="text-[#df6500] hover:underline"
          >
            enquiries@glencar.com
          </a>
        </div>
        <ul className="flex items-center gap-3">
          <li className="">
            <a href="#">
              <FaTwitter className="text-xl text-black" />
            </a>
          </li>
          <li className="">
            <a href="">
              <BsVimeo className="text-xl text-black" />
            </a>
          </li>
          <li className="">
            <a href="">
              <FaLinkedinIn className="text-xl text-black" />
            </a>
          </li>
          <li className="">
            <a href="">
              <FaFacebookF className="text-xl text-black" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default StickyContactBar;
