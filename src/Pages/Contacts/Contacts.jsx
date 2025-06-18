import React from "react";
import Address from "./Address";
import ContactForm from "./ContactForm";

function Contacts() {
  return (
    
      <div className="px-32 grid grid-cols-2 gap-20 mt-10 sm:px-0 sm:grid-cols-1 sm:gap-10 sm:mt-[-26px]">
        <Address />
        <ContactForm />
      </div>
  );
}

export default Contacts;

