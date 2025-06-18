import React from "react";

const MarketingStratergy = () => {
  const stratergies = [
    {
      id: 1,
      title: "CONTENT MARKETING",
      description:
        "Content Marketing is a form of marketing focuased on creating, publishing and distributing content for a targerted audience online. It is used to promote products and services.",
      image: "images/Content-marketing.png",
    },
    {
      id: 2,
      title: "SOCIAL MEDIA MARKETING",
      description:
        "Social media marketing focuses on providing uusers with content they find valuable and want to share accross their social networks, resulting in increased visibility and website traffic.",
      image: "images/social-media.png",
    },
    {
      id: 3,
      title: "SEO MARKETING",
      description:
        "SEO is a search engine optimization strategy that focuses on optimizing the visibility of your website in search engine results pages. It helps to improve the ranking of your website in search engine results pages.",
      image: "images/seo.png",
    },
    {
      id: 4,
      title: "INBOUND MARKETING",
      description:
        "Inbound is far and away the most effective B2B marketing strategy because it leverages the strengths of the majority of the other nine strategis to attract, engage and delight customers.",
      image: "images/Inbound-marketing.png",
    },
  ];

  return (
    <div className="space-y-10">
      <h1 className="text-5xl font-semibold text-primary sm:text-3xl sm:mt-0 sm:text-center sm:mb-10">
        Want to Boost your Bussiness Growth?
      </h1>
      <h1 className="text-7xl font-semibold text-primary mt-10 sm:text-5xl sm:text-center sm:mb-10 sm:mt-10">
        The <b className="text-secondary ">SOLUTION</b> is here...
      </h1>
      <p className="text-gray-600 text-xl mt-10 sm:text-center sm:mb-20 sm:mt-10 sm:text-lg sm:px-10 sm:py-5">
        Curious about what business professionals thinks of different marketing
        stratergies. We took a look at recent survey results and reports that
        compiled data on the topic, and created a list of 10 B2B marketing
        stratergies commonly recognized as successful regardless of industry.
        Here's what we found, in no particular order:
      </p>

      <div className="grid grid-cols-2 gap-20 sm:grid-cols-1">
        {stratergies.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="border border-primary p-5 m-5 flex flex-col space-y-10 rounded transform hover:scale-105 duration-300"
          >
            <h1 className="text-center -mt-12 bg-white border-primary text-secondary border text-3xl rounded py-2 px-4 sm:text-2xl sm:-mt-12">
              {title}
            </h1>
            <img src={image} className="h-24 w-24 flex self-center sm:h-20 sm:w-20 " />
            <p className="text-gray-600 text-md mt-10 hover:text-primary sm:text-sm  sm:text-center sm:py-5">
              {description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketingStratergy;