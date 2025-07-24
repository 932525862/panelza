import video from "../../assets/video.bg.mp4";
function Video() {
  return (
    <section className="w-full h-[950px] min-[933px]:h-[550px] bg-black relative">
      <video
        className="w-full h-full object-cover "
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={video} type="video/mp4" />
      </video>
      <div className=" absolute top-0 left-0 z-10 w-full h-full bg-[#00000076] flex items-center justify-center">
        <marquee behavior="">
          <h1 className="text-4xl  text-[#e37113] font-medium">Panelza</h1>
        </marquee>
      </div>
    </section>
  );
}

export default Video;
