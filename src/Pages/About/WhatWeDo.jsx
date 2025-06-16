import React from "react";

function WhatWeDo() {
  const services = [
    {
      title: "Web Dev",
      image: "images/Web.png",
      description:
        "Web development is the work involved in developing a website for the Internet or an intranet.",
    },
    {
      title: "Mobile Dev",
      image: "images/mobile-phone.png",
      description:
        "Mobile development is the work involved in developing a mobile application for mobile devices such as smartphones, tablets, and feature phones.",
    },
    {
      title: "Digital Marketing",
      image: "images/Digital-marketing.png",
      description:
        "Digital marketing is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
    },
    {
      title: "Grapics Design",
      image: "images/graphic-design.png",
      description:
        "Graphic design is the work involved in developing a digital marketing strategy and developing a digital marketing plan.",
    },
  ];
  return (
    <div className="mt-20 sm:mt-10 ">
      <h1 className="text-8xl text-secondary text-center sm:text-4xl sm:font-semibold ">What We Do ?</h1>
      <div className="h-96 w-full  bg-primary mt-12  "></div>
      <div className="grid grid-cols-4 gap-10 mx-32 sm:mx-0 -mt-56 sm:grid-cols-1 sm:w-full sm:px-5 ">
        {services.map((items) => (
          <div key={items.title} className="p-5 bg-white border shadow flex flex-col space-y-5 items-center transform hover:scale-105 duration-300 sm:w-full sm:p-10 sm:bg-slate-50 sm:rounded-lg sm:outline sm:shadow-lg ">
            <img src={items.image} alt={items.title} className="h-16 w-16" />
            <h1 className="text-2xl">{items.title}</h1>
            <p className="text-md text-gray-600">{items.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
