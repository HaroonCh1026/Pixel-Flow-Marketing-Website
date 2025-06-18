
const NumberClients = () => {
  const stats = [
    {
      value: "52+",
      label: "Clients",
    },
    {
      value: "50+",
      label: "Projects",
    },
    {
      value: "2",
      label: "Locations",
    },
  ];

  return (
    <div className="px-52 mt-20 sm:px-0">
      <div className="flex justify-center mb-20 sm:mb-10 sm:text-center">
        <h1 className="text-5xl font-semibold text-primary sm:text-3xl sm:font-normal sm:mb-10">
          Our Services TO Clients
        </h1>
      </div>

      <div className="grid grid-cols-3 gap-10 items-center bg-gradient-to-r from-primary to-secondary p-10 rounded shadow-lg animate-pulse transition-all duration-500">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col space-y-5 items-center ">
            <h1 className="text-8xl font-bold text-white sm:text-6xl sm:font-semibold">
              {value}
            </h1>
            <p className="text-3xl text-white sm:text-xl">{label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NumberClients;