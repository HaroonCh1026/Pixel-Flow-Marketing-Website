import React from "react";

function WhyMarketing() {
  return (
    <div className="space-y-10 sm:space-y-5 sm:mt-10 mt-10">
      <h1 className="text-8xl font-semibold text-center text-primary sm:text-4xl sm:font-normal">
        Why <b className="text-secondary  ">Marketing</b> ?
      </h1>
      <div className="aspect-video sm:aspect-square mx-auto ">
        <dotlottie-player
          src="https://lottie.host/e9934f8d-bfc5-477b-aadb-6ba91b069d13/54ha9q7kHt.json"
          background="transparent"
          speed="1"
          direction="1"
          playMode="normal"
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <p className="text-lg text-center text-gray-600 sm:text-base sm:px-10 sm:font-light">
        Do you know what your customers want? Do you think your customers trust
        your products? When was the last time you saw a customer tweeting about
        your product or service? Was it a complaint or compliment?
      </p>
      <h2 className="text-4xl font-semibold text-center text-primary sm:text-3xl sm:font-normal sm:mt-5">
        The answers to all these questions lies in marketing.
      </h2>
      <p className="text-lg text-center text-gray-600 sm:text-base sm:px-10 sm:font-light">
        How you market your business determines if the enterprise will be
        successful or not. Marketing is a tool used to create and maintain
        demand, relevance, reputation, competition and more. Without it, your
        business is likely to close down due to lack of sales.
      </p>
    </div>
  );
}

export default WhyMarketing;

