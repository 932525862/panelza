import Fotos1 from '../../assets/tashqi.jpg'
import Fotos2 from '../../assets/fotos2.jpg'
import Fotos3 from '../../assets/panelzaIm3.jpg'
import Fotos4 from '../../assets/panelzamIm4.jpg'
import Fotos5 from '../../assets/panelzaIm1.jpg'
import Fotos6 from '../../assets/panelzaIm2.jpg'
import Fotos7 from '../../assets/fotos7.jpg'
import Fotos8 from '../../assets/fotos5.jpg'

const images = [
  { src: Fotos1, alt: 'Внешний вид строительного проекта' },
  { src: Fotos2, alt: 'Фото современного архитектурного здания' },
  { src: Fotos3, alt: 'Строительные работы на объекте' },
  { src: Fotos4, alt: 'Дизайн интерьера здания' },
  { src: Fotos5, alt: 'Металлоконструкция в процессе строительства' },
  { src: Fotos6, alt: 'Архитектурные детали в разработке' },
  { src: Fotos7, alt: 'Заключительный этап строительства' },
  { src: Fotos8, alt: 'Металлоконструкция в процессе строительства' },
]

function Fotos() {
  return (
    <section className="fotos py-16 bg-gradient-to-b from-gray-900 to-gray-800  mt-[55px]">
      <div className="container mx-auto px-4">
        
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Наши последние проекты
          </h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-3 rounded-full"></div>
        </div>

        {/* Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <li key={index} className="group relative overflow-hidden rounded-xl shadow-md shadow-black/50">
              
              {/* Image */}
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Text on hover */}
              <p className="absolute bottom-4 left-4 text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {img.alt}
              </p>

            </li>
          ))}
        </ul>

      </div>
    </section>
  )
}

export default Fotos
