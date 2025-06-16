import React, { useState, useEffect } from "react";
import NumberClients from "./NumberClients";

function ClientsList() {
  const [clientsIndex, setClientsIndex] = useState(0);

  // Static clients data
  const dataClients = [
    {
      id: 1,
      name: "Sarah Johnson",
      logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      description:
        "CEO of TechSolutions Inc. with 15+ years experience in enterprise software solutions.",
      url: "https://techsolutions.example.com",
    },
    {
      id: 2,
      name: "Michael Chen",
      logo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      description:
        "Founder of GreenEnergy Corp, renewable energy expert and sustainability advocate.",
      url: "https://greenenergy.example.com",
    },
    {
      id: 3,
      name: "Olivia Martinez",
      logo: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      description:
        "Senior Partner at Global Finance, specializing in wealth management strategies.",
      url: "https://globalfinance.example.com",
    },
    {
      id: 4,
      name: "David Wilson",
      logo: "https://images.unsplash.com/photo-1542190891-2093d38760f2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      description:
        "CTO of HealthPlus Systems, digital healthcare innovator and keynote speaker.",
      url: "https://healthplus.example.com",
    },
    {
      id: 5,
      name: "Emma Thompson",
      logo: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      description:
        "Creative Director at Design Studio, awarded for innovative brand experiences.",
      url: "https://creativedesign.example.com",
    },
    {
      id: 6,
      name: "James Rodriguez",
      logo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80",
      description:
        "Logistics Director at LogiChain, transforming operations with AI technology.",
      url: "https://logichain.example.com",
    },
  ];

  const getVisibleItems = () => {
    return dataClients.slice(
      clientsIndex,
      clientsIndex + Math.min(3, dataClients.length - clientsIndex)
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (dataClients.length > 3 && clientsIndex < dataClients.length - 3) {
        setClientsIndex(clientsIndex + 1);
      } else {
        setClientsIndex(0);
      }
    }, 4000);
    return () => clearInterval(intervalId);
  }, [clientsIndex, dataClients.length]);

  return (
    <div className="relative">
      <div className="bg-[#D3C5E5] h-52 rounded-b-full"></div>
      <div className="flex justify-center -mt-64 items-end space-x-10">
        <div className="grid grid-cols-3 sm:grid-cols-1 sm:-mt-10 sm:rounded-full gap-10 transition-all duration-500">
          {getVisibleItems().map((item) => (
            <div
              className="p-5 bg-white shadow w-[360px] sm:w-[300px] h-[360px] sm:h-[300px] border rounded relative transition-all duration-500"
              key={item.id}
            >
              <div className="flex space-x-10 items-center justify-between z-10 ">
                <img
                  src={item.logo}
                  alt={item.name}
                  className="h-24 w-24 mb-5 rounded-full border-4 border-primary shadow-lg"
                />

                <h1 className="text-primary font-semibold text-2xl capitalize">
                  {item.name}
                </h1>
              </div>
              <p className="mt-5">{item.description}</p>
              <button
                className="text-white bg-primary rounded px-5 py-2 text-lg font-semibold hover:bg-secondary transition-all absolute bottom-5 right-5"
                onClick={() => window.open(item.url)}
              >
                Visit
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="sm:hidden">
        <div
          className="absolute top-1/2 left-5 transform -translate-y-1/2 cursor-pointer"
          onClick={() =>
            setClientsIndex(
              clientsIndex - 1 >= 0 ? clientsIndex - 1 : dataClients.length - 3
            )
          }
        >
          <i
            className="ri-arrow-left-line h-40 w-40 bg-primary rounded-full text-white"
            style={{ fontSize: "2rem" }}
          ></i>
        </div>
        <div
          className="absolute top-1/2 right-5 transform -translate-y-1/2 cursor-pointer"
          onClick={() =>
            setClientsIndex(
              clientsIndex + 1 < dataClients.length - 2 ? clientsIndex + 1 : 0
            )
          }
        >
          <i
            className="ri-arrow-right-line h-40 w-40 bg-primary rounded-full text-white"
            style={{ fontSize: "2rem" }}
          ></i>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <div className="flex space-x-2">
          {dataClients.length > 2 &&
            [...Array(dataClients.length - 2)].map((_, index) => (
              <div
                key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  index === clientsIndex ? "bg-secondary" : "bg-primary"
                }`}
                onClick={() => setClientsIndex(index)}
              />
            ))}
        </div>
      </div>
      <NumberClients />
    </div>
  );
}

export default ClientsList;
