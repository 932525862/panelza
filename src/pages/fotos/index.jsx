import Fotos1 from '../../assets/fotos1.jpg'
import Fotos2 from '../../assets/fotos2.jpg'
import Fotos3 from '../../assets/fotos3.jpg'
import Fotos4 from '../../assets/fotos4.jpg'
import Fotos5 from '../../assets/fotos5.jpg'
import Fotos6 from '../../assets/fotos6.jpg'
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
    <section className="fotos py-10 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center text-gray-800">
          Наши последние проекты
        </h2>
        <ul className="grid grid-cols-2 min-[900px]:grid-cols-4 gap-5">
          {images.map((img, index) => (
            <li key={index}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
                loading="lazy"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Fotos
