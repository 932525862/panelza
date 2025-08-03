import Home_bg from "../../assets/home.bg.png";
import { Helmet } from "react-helmet-async";

function Home() {
  return (
    <>
      <Helmet>
        <title>Завод сэндвич-панелей в Узбекистане | Panelza</title>
        <meta
          name="description"
          content="Производим и поставляем сэндвич-панели по всему Узбекистану. Качество, надёжность и индивидуальный подход с 2016 года. Стеновые панели из минеральной ваты от Panelza."
        />
        <meta
          name="keywords"
          content="сэндвич панели Узбекистан, сэндвич панели Ташкент, завод сэндвич панелей, огнестойкие панели, минеральная вата панели, строительные панели"
        />
        <meta
          property="og:title"
          content="Panelza — Сэндвич-панели по всему Узбекистану"
        />
        <meta
          property="og:description"
          content="Качественные строительные панели от Panelza. Производим и доставляем по всей стране. Завод с 2016 года."
        />
        <meta property="og:type" content="website" />
        
        <meta property="og:url" content="https://panelza.uz" />
        <meta property="og:site_name" content="Panelza" />
        <meta property="og:locale" content="ru_RU" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>

      <section
        style={{
          backgroundImage: `url(${Home_bg})`,
        }}
        id="home"
        className="h-[100dvh] pt-[90px] relative max-[770px]:bg-center bg-cover bg-no-repeat"
      >
        <div className="z-10 absolute top-0 left-0 w-full h-full bg-[#02124e52]"></div>
        <div className="container relative z-20">
          <div className="max-w-full min-[1030px]:max-w-[60%] max-[900px]:pt-[60px] text-center min-[1030px]:text-start absolute text-shadow-xs text-shadow-amber-500 flex flex-col max-[1030px]:items-center max-[1030px]:pt-[200px]">
            <h1 className="text-white max-[1030px]:text-[50px] max-[670px]:text-[40px] max-[550px]:text-4xl min-[900px]:max-w-[70%] min-[1030px]:max-w-full text-5xl font-medium">
              Завод по производству сэндвич-панелей с доставкой по
              <span className="text-[#df6500]"> всему Узбекистану</span>
            </h1>
            <p className="text-white max-[550px]:text-2xl max-[1030px]:text-4xl max-[1030px]:text-[3xl] text-2xl mt-7 min-[900px]:max-w-[70%] min-[1030px]:max-w-full">
              Мы производим и поставляем сэндвич-панели высокого качества для
              различных строительных проектов по всей территории Узбекистана
            </p>
            <p className="text-[#d3d3d3] text-xl max-[550px]:text-xl max-[1030px]:text-3xl max-[670px]:text-2xl mt-7 min-[900px]:max-w-[70%] min-[1030px]:max-w-full">
              Широкий ассортимент для любых строительных задач. Наши панели
              отличаются прочностью, отличной теплоизоляцией и длительным сроком
              службы. Предлагаем индивидуальные решения под нужды каждого
              клиента — от складов и ангаров до коммерческих и промышленных
              объектов.
            </p>
            {/* <div className="flex items-center text-shadow-xs text-shadow-amber-500">
              <a
                href="tel:+998774080005"
                className="inline-block text-2xl font-bold text-[#ffffff]"
              >
                +998 77 408 00 05
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
