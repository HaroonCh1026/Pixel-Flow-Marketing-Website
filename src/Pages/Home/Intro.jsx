import React from "react";

function Intro() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-1 h-screen items-center sm:mt-10">
      <div className="flex flex-col space-y-10">
        <h1 className="text-7xl font-semibold text-primary sm:text-6xl">The Best <br /><b className="text-secondary">Marketing</b></h1>
        <h1 className="text-4xl font-semibold text-primary ">Does't feel like marketing</h1>
        <button className="px-16 py-5 bg-secondary text-white text-xl max-w-max hover:bg-primary sm:px-12 sm:py-3 sm:text-base sm:self-center sm:rounded-full " onClick={() => window.scrollTo(0, document.body.scrollHeight)}>Get Started</button>
      </div>
      <div className="p-10 w-full sm:p-0 ">
        <dotlottie-player
          src="https://lottie.host/25a191ef-dc9c-4b9a-b982-eb5c4ada489f/uGHE5TY93e.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
    </div>
  );
}

export default Intro;
