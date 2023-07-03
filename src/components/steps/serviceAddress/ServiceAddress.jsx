import React, { useState } from "react";
import CustomizeInput from "../../CustomizeInput";

const ServiceAddress = () => {
   const [serviceFormData, setServiceFormData] = useState({
      streetAddress: "",
      aptSuite: "",
      city: "",
      zip: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;

      setServiceFormData((prevFormData) => ({
         ...prevFormData,
         [name]: value,
      }));
   };

   return (
      <section>
         <div className=" flex justify-start items-start flex-col">
            <span className="text-4xl font-extrabold my-4">Where Do You Need Service?</span>
            <span className="text-lg font-bold my-2">Service Address</span>
         </div>
         <form>
            <div className="flex justify-center items-center flex-col w-full">
               <div className="grid grid-cols-2 w-full">
                  <CustomizeInput
                     type="text"
                     placeholder="Street address"
                     value={serviceFormData.streetAddress}
                     onChange={handleChange}
                     name="streetAddress"
                  />
                  <CustomizeInput
                     type="text"
                     placeholder="Apt/Suite"
                     value={serviceFormData.aptSuite}
                     onChange={handleChange}
                     name="aptSuite"
                  />
               </div>
               <div className="grid grid-cols-3 w-full">
                  <CustomizeInput
                     type="text"
                     placeholder="City"
                     value={serviceFormData.city}
                     onChange={handleChange}
                     name="city"
                  />
                  <CustomizeInput
                     type="text"
                     placeholder="Zip"
                     value={serviceFormData.zip}
                     onChange={handleChange}
                     name="zip"
                  />
               </div>
            </div>
         </form>
      </section>
   );
};

export default ServiceAddress;
