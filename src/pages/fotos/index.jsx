import images from "../../data/images";
import { useLanguage } from "../../contexts/LanguageContext";

function Fotos() {
  const { t } = useLanguage();
  return (
    <section id="gallery" className="fotos py-16 bg-gradient-to-b from-gray-900 to-gray-800 mt-[55px]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">{t.gallery.heading}</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.gallery.alts.map((alt, index) => {
            const img = images[`gallery-${index + 1}`];
            return (
              <li key={img.src} className="group relative overflow-hidden rounded-xl shadow-md shadow-black/50">
                <figure>
                  <img
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    alt={alt}
                    className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4 pt-10 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {alt}
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default Fotos;
