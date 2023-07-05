import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CustomizeInput from "../../CustomizeInput";
import CustomizeTextarea from "../../CustomizeTextarea";
import { setInfoFormData } from "../../../store/actions/actions";

const ContactInformation = () => {
   const dispatch = useDispatch();

   const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      email: "",
      textarea: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;

      if (name === "phoneNumber") {
         let numericValue = value.replace(/\D/g, "");

         if (numericValue.length > 10) {
            numericValue = numericValue.slice(0, 10);
         }

         setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: numericValue,
         }));
         dispatch(setInfoFormData({ ...formData, [name]: numericValue }));
      } else {
         setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
         }));
         dispatch(setInfoFormData({ ...formData, [name]: value }));
      }
   };

   return (
      <section>
         <div className=" flex justify-start items-start flex-col">
            <span className="text-4xl font-extrabold my-4 sm:text-3xl sm:my-2">
               Your Contact Details
            </span>
            <span className="text-lg font-bold my-2 sm:text-base">
               Please provide your name, phone number and email
            </span>
         </div>
         <form>
            <div className="flex justify-center items-center flex-col w-full">
               <div className="grid grid-cols-2 w-full sm:grid-cols-1">
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
