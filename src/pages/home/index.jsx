import Home_bg from "../../assets/home.bg.png";

function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(${Home_bg})`,
      }}
      id="home"
      className="h-[100vh] pt-[90px] relative max-[770px]:bg-center bg-cover bg-no-repeat"
    >
      <div className=" z-10 absolute top-0 left-0 w-full h-full bg-[#02124e52]"></div>
      <div className="container relative z-20">
        <div className="max-w-full md:max-w-[60%] pt-[60px] absolute text-shadow-xs text-shadow-amber-500">
          <h1 className=" text-white text-4xl font-medium">
            Завод по производству сэндвич-панелей с доставкой по
            <span className="text-[#df6500]"> всему Казахстану</span>
          </h1>
          <p className="text-white text-2xl mt-7">
            Мы предлагаем широкий ассортимент сэндвич-панелей для различных
            строительных нужд. Наши панели отличаются высоким качеством и
            долговечностью.
          </p>
          <p className=" text-[#d3d3d3] text-xl mt-7">
            Мы предлагаем широкий ассортимент сэндвич-панелей для различных
            строительных нужд
          </p>
          {/* <div className="flex items-center text-shadow-xs text-shadow-amber-500">
            <a
              href="tell:+998 77 408 00 05"
              className="inline-block text-2xl font-bold text-[#ffffff]"
            >
              +998 77 408 00 05
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Home;
