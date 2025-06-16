import React from "react";

const contacts = [
  {
    icon: (
      <a href="https://www.google.com/maps/search/?api=1&query=31.4167,72.9833" target="_blank" rel="noopener noreferrer">
        <i className="ri-map-pin-line text-3xl text-[#FFA600] animate-pulse "></i>
      </a>
    ),
    title: "Visit Us ",
    description: [
      "Lahore  ",
      "Pakistan",
    ],
    key: "visit",
  },
  {
    icon: (
      <a href="mailto:Haroonriaz1022@gmail" target="_blank" rel="noopener noreferrer" aria-label="mail.com">
        <i className="ri-mail-line text-3xl text-[#FFA600] animate-pulse "></i>
      </a>
    ),
    title: "Mail Us ",
    description: [
      "Haroonryaz1024@gmail.com",
    ],
    key: "mail",
  },
  {
    icon: (
      <a href="https://wa.me/+123456789" target="_blank" rel="noopener noreferrer">
        <i className="ri-whatsapp-line text-3xl text-[#FFA600] animate-pulse "></i>
      </a>
    ),
    title: "WhatsApp Us ",
    description: [
      "+123456789",
    ],
    key: "call",
  },
];
function Address() {
  return (
    <div className="flex justify-center">
      <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white">
        <h1 className="text-3xl font-semibold text-white sm:text-5xl sm:font-bold sm:text-center">Get In Touch</h1>
        <p  className="sm:text-center sm:text-lg sm:font-semibold">
          ThinkSphere is Digital marketing agency , that provides you with the
          best services.
        </p>

        {contacts.map((contact) => (
          <div key={contact.key} className="flex space-x-5 items-center sm:space-x-10 sm:items-start ">
            <div className="h-12 w-12 bg-[#FFA60021] p-2 rounded">
              {contact.icon}
            </div>

            <div>
              <h1 className="text-xl font-semibold text-white sm:text-2xl sm:font-bold">{contact.title}</h1>
              {contact.description.map((desc) => (
                <p key={desc} className="mt-2 text-white sm:text-lg sm:font-medium">{desc}</p>
              ))}
            </div>
          </div>
        ))}
        <div className="flex space-x-5 items-center mt-10 gap-10">
          <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="ri-linkedin-box-line text-3xl text-white bg-[#0A66C2] rounded-full p-2"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
            <i className="ri-twitter-line text-3xl text-white bg-[#1DA1F2] rounded-full p-2"></i>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <i className="ri-instagram-line text-3xl text-white bg-gradient-to-br from-[#FFD53D] to-[#FF7733] rounded-full p-2"></i>
          </a>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <i className="ri-facebook-circle-line text-3xl text-white bg-[#4267B2] rounded-full p-2"></i>
          </a>
        </div>
      </div>

    </div>
  );

}

export default Address;


