import React, { useRef, useState } from 'react';


const accessKey = import.meta.env.VITE_WEB3FORM_API_KEY;

const ContactForm = () => {
  const [popup, setPopup] = useState(null);
  const formRef = useRef(null);

  const handlePopup = (type, message) => {
    setPopup({
      type,
      message,
    });
    setTimeout(() => {
      setPopup(null);
    }, 3000);
    formRef.current.reset();
  };

  const formSubmit = async (event) => {
    event.preventDefault();
    
    const formData = new FormData(event.target);
   
    console.log("Access Key:", accessKey); // Debugging line

    if (!accessKey) {
      console.error("Error: REACT_APP_WEB3FORMS_ACCESS_KEY is not set");
      return;
    }

    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        handlePopup("success", "Meeting has been booked!");
        event.target.reset();
      } else {
        console.log("Error", data);
        handlePopup("error", "Error sending message");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      handlePopup("error", "Error sending message");
    }
  };
  return (
    <div className="space-y-10 relative">
      {popup && (
        <div
          className={
            "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 rounded-lg shadow-lg p-4 " +
            (popup.type === "success"
              ? "bg-green-100 text-green-800 border-green-500"
              : "bg-red-100 text-red-800 border-red-500")
          }
        >
          <p className="text-center">{popup.message}</p>
        </div>
      )}
      <h1 className="text-4xl font-semibold text-primary sm:font-bold sm:text-center ">
        Send A Message
      </h1>
      <hr className="border-2 border-primary" />
      <form
        className="flex flex-col space-y-10 sm:space-y-5 sm:px-8"
        onSubmit={formSubmit}
        ref={formRef}
        method="POST"
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          required
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Message"
          required
          className="py-3 px-5 bg-blue-50 focus:outline-none rounded-lg w-full"
        />
        <div className="flex justify-end sm:justify-center sm:mt-5 ">
          <button
            type="submit"
            className="px-16 py-3 bg-secondary text-white text-xl max-w-max rounded hover:bg-primary hover:text-white transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};
export default ContactForm;

