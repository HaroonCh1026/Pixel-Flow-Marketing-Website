

function IntroClient() {
  return (
    <div className="min-h-screen bg-[#D3C5E5] grid grid-cols-2 items-center sm:grid-cols-1 -mt-6 sm:-ml-6 sm:-mr-6 ">
      <div className="z-10 flex justify-center mx-1 h-74 sm:h-64">
        <dotlottie-player
          src="https://lottie.host/391ca72d-f0e5-4436-baf0-40da8fe2bfa1/0m0Bg79Nug.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <div className="z-10 max-w-max flex flex-col space-y-5 sm:p-10  sm:mt-5">
        <h1 className="text-7xl font-semibold sm:text-6xl ">
          we <b className="text-secondary">Work</b> <br />together with <br /> our <b className="text-green-700">Clients</b>
        </h1>
        <p className="text-md text-gray-500 sm:font-medium sm:mt-2 ">“To give real service you must add something which cannot be bought <br /> or measured with money, and that is sincerity and integrity.”</p>
      </div>
    </div>
  );
}

export default IntroClient;

