import Home_bg from "../../assets/home.bg.png";

function Home() {
  return (
    <section
      style={{
        backgroundImage: `url(${Home_bg})`,
      }}
      id="home"
      className=" h-[100dvh] pt-[90px] relative max-[770px]:bg-center bg-cover bg-no-repeat"
    >
      <div className=" z-10 absolute top-0 left-0 w-full h-full bg-[#02124e52]"></div>
      <div className="container relative z-20 ">
        <div className=" max-w-full min-[1030px]:max-w-[60%] max-[900px]:pt-[60px] text-center min-[1030px]:text-start absolute text-shadow-xs text-shadow-amber-500 flex flex-col max-[1030px]:items-center max-[1030px]:pt-[200px]">
          <h1 className=" text-white max-[1030px]:text-[50px] max-[670px]:text-[40px] max-[550px]:text-4xl min-[900px]:max-w-[70%] min-[1030px]:max-w-full text-5xl font-medium">
            Завод по производству сэндвич-панелей с доставкой по
            <span className="text-[#df6500]"> всему Казахстану</span>
          </h1>
          <p className="text-white max-[550px]:text-2xl max-[1030px]:text-4xl max-[1030px]:text-[3xl] text-2xl  mt-7 min-[900px]:max-w-[70%] min-[1030px]:max-w-full">
            Мы предлагаем широкий ассортимент сэндвич-панелей для различных
            строительных нужд. Наши панели отличаются высоким качеством и
            долговечностью.
          </p>
          <p className=" text-[#d3d3d3] text-xl max-[550px]:text-xl max-[1030px]:text-3xl max-[670px]:text-2xl mt-7 min-[900px]:max-w-[70%] min-[1030px]:max-w-full">
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
