import React, { useEffect, useState } from "react";

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
      className={`fixed bottom-0 left-0 w-full z-40 transition-all duration-500 ease-in-out 
        ${
          isAtFooter
            ? "translate-y-full opacity-0"
            : "translate-y-0 opacity-100"
        }`}
    >
      <div className="bg-[#f8f3f3] border-t border-gray-300 shadow-md">
        <div className="container mx-auto h-[25px] px-4 flex items-center justify-between text-sm">
          <p className="text-gray-700 font-medium">Contact us on:</p>
          <a href="tel:02077706900" className="text-blue-600 hover:underline">
            0207 770 6900
          </a>
          <a
            href="mailto:enquiries@glencar.com"
            className="text-blue-600 hover:underline"
          >
            enquiries@glencar.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default StickyContactBar;
