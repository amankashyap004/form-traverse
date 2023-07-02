import React from "react";
import CustomizeInput from "../../CustomizeInput";

const ContactInformation = () => {
   return (
      <section>
         <div className=" flex justify-start items-start flex-col">
            <span className="text-4xl font-extrabold my-4">Your Contact Details</span>
            <span className="text-lg font-bold my-2">
               Please provide your name, phone number and email
            </span>
         </div>
         <div className="flex justify-between items-center">
            <CustomizeInput type="text" placeholder={"First name"} />
            <CustomizeInput type="text" placeholder={"First name"} />
         </div>
      </section>
   );
};

export default ContactInformation;
