import React from "react";

const contactData = {
  mainContacts: [
    {
      icon: "ri-map-pin-line",
      title: "Visit Us",
      description: ["Lahore", "Pakistan"],
      key: "visit",
      link: "https://www.google.com/maps/search/?api=1&query=31.4167,72.9833",
      color: "#FFA600"
    },
    {
      icon: "ri-mail-line",
      title: "Mail Us",
      description: ["Haroonryaz1024@gmail.com"],
      key: "mail",
      link: "mailto:Haroonriaz1024@gmail.com",
      color: "#FFA600"
    },
    {
      icon: "ri-whatsapp-line",
      title: "WhatsApp Us",
      description: ["+92 302 1965047"],
      key: "call",
      link: "https://wa.me/+923021965047",
      color: "#FFA600"
    }
  ],
  socialContacts: [
    {
      icon: "ri-linkedin-box-line",
      key: "linkedin",
      link: "https://www.linkedin.com/in/haroon-riaz-65a069335",
      bgColor: "bg-[#0A66C2]"
    },
    {
      icon: "ri-twitter-x-line",
      key: "twitter",
      link: "https://x.com/HAROONRIAZ24",
      bgColor: "bg-black"
    },
    {
      icon: "ri-instagram-line",
      key: "instagram",
      link: "https://www.instagram.com/haroonriaz24/?hl=en",
      bgColor: "bg-gradient-to-br from-[#FFD53D] to-[#FF7733]"
    },
    {
      icon: "ri-facebook-circle-line",
      key: "facebook",
      link: "https://www.facebook.com/HaroonRiaz24",
      bgColor: "bg-[#4267B2]"
    }
  ]
};

function Address() {
  return (
    <div className="flex justify-center">
      <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white">
        <h1 className="text-3xl font-semibold text-white sm:text-5xl sm:font-bold sm:text-center">
          Get In Touch
        </h1>
        <p className="sm:text-center sm:text-lg sm:font-semibold">
          Pixel Flow is Digital marketing agency, that provides you with the
          best services.
        </p>

        {contactData.mainContacts.map((contact) => (
          <div key={contact.key} className="flex space-x-5 items-center sm:space-x-10 sm:items-start">
            <div className="h-12 w-12 bg-[#FFA60021] p-2 rounded">
              <a href={contact.link} target="_blank" rel="noopener noreferrer">
                <i className={`${contact.icon} text-3xl text-[${contact.color}] animate-pulse`}></i>
              </a>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white sm:text-2xl sm:font-bold">
                {contact.title}
              </h1>
              {contact.description.map((desc) => (
                <p key={desc} className="mt-2 text-white sm:text-lg sm:font-medium">
                  {desc}
                </p>
              ))}
            </div>
          </div>
        ))}

        <div className="flex space-x-5 items-center mt-10 gap-10">
          {contactData.socialContacts.map((social) => (
            <a 
              key={social.key}
              href={social.link} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label={social.key}
            >
              <i className={`${social.icon} text-3xl text-white ${social.bgColor} rounded-full p-2`}></i>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Address;