import React, { useState } from "react";
import CustomizeInput from "../../CustomizeInput";
import CustomDropdown from "../../CustomDropdown";
import CustomizeTextarea from "../../CustomizeTextarea";

const dropdownState = [
   { value: "option1", label: "AK" },
   { value: "option2", label: "CA" },
   { value: "option3", label: "NY" },
];

const ServiceAddress = () => {
   const [serviceFormData, setServiceFormData] = useState({
      streetAddress: "",
      aptSuite: "",
      city: "",
      selectedOption: "",
      zip: "",
      textarea: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;

      setServiceFormData((prevFormData) => ({
         ...prevFormData,
         [name]: value,
      }));
   };

   const handleDropdownChange = (selectedOption) => {
      setServiceFormData((prevFormData) => ({
         ...prevFormData,
         selectedOption: selectedOption.label,
      }));
   };

   console.log(serviceFormData);

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
                  <div className="w-[full-2] mr-2 my-2">
                     <CustomDropdown
                        options={dropdownState}
                        defaultValue={"State"}
                        onChange={handleDropdownChange}
                     />
                  </div>
                  <CustomizeInput
                     type="text"
                     placeholder="Zip"
                     value={serviceFormData.zip}
                     onChange={handleChange}
                     name="zip"
                  />
               </div>
               <div className="w-full">
                  <CustomizeTextarea
                     placeholder="Include notes such as access codes and parking instructions here. (optional)"
                     value={serviceFormData.textarea}
                     onChange={handleChange}
                     name="textarea"
                  />
               </div>
            </div>
         </form>
      </section>
   );
};

export default ServiceAddress;
