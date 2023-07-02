import React, { useState } from "react";
import CustomizeInput from "../../CustomizeInput";
import CustomizeTextarea from "../../CustomizeTextarea";

const ContactInformation = () => {
   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      textarea: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
   };

   return (
      <section>
         <div className=" flex justify-start items-start flex-col">
            <span className="text-4xl font-extrabold my-4">Your Contact Details</span>
            <span className="text-lg font-bold my-2">
               Please provide your name, phone number and email
            </span>
         </div>
         <form onSubmit={handleSubmit}>
            <div className="flex justify-center items-center flex-col w-full">
               <div className="grid grid-cols-2 w-full">
                  <CustomizeInput
                     type="text"
                     placeholder="First Name"
                     value={formData.firstName}
                     onChange={handleChange}
                     name="firstName"
                  />
                  <CustomizeInput
                     type="text"
                     placeholder="Last Name"
                     value={formData.lastName}
                     onChange={handleChange}
                     name="lastName"
                  />
                  <CustomizeInput
                     type="text"
                     placeholder="Phone Number"
                     value={formData.phoneNumber}
                     onChange={handleChange}
                     name="phoneNumber"
                  />
                  <CustomizeInput
                     type="email"
                     placeholder="Email"
                     value={formData.email}
                     onChange={handleChange}
                     name="email"
                  />
               </div>
               <div className="w-full">
                  <CustomizeTextarea
                     placeholder="How did you hear about us? (optional)"
                     value={formData.textarea}
                     onChange={handleChange}
                     name="textarea"
                  />
               </div>
            </div>
         </form>
      </section>
   );
};

export default ContactInformation;
