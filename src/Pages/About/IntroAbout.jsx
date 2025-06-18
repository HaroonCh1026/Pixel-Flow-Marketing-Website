import introAbout from "../../assets/intro-about.svg";

function IntroAbout() {
  return (
    <>
      <div className="about-intro h-full sm:hidden  "></div>
      <div className="grid grid-cols-2 sm:grid-cols-1 h-screen items-center min-h-screen sm:bg-secondary sm:p-10 sm:space-y-10 sm:justify-items-center sm:mt-[-24px] sm:ml-[-24px] sm:mr-[-24px]">
        <div className="z-10 flex justify-center mx-1">
          <img src={introAbout} className="h-[500px] w-[500px] sm:h-[300px] sm:w-[300px] sm:self-center sm:mt-0" />
        </div>
        <div className="z-10 max-w-max flex flex-col space-y-5 sm:p-8 sm:-mt-3">
          <h1 className="text-8xl font-semibold text-white sm:text-5xl  sm:font-semibold:  ">PixelFlow</h1>
          <hr />
          <h1 className="text-xl font-semibold text-gray-200  sm:text-base sm:font-normal">OLDER | STRONGER | WISER</h1>
        </div>
      </div>
    </>
  );
}

export default IntroAbout;


