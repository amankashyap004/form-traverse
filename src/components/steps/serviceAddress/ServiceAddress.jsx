import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CustomizeInput from "../../CustomizeInput";
import CustomDropdown from "../../CustomDropdown";
import CustomizeTextarea from "../../CustomizeTextarea";
import { setServiceFormData } from "../../../store/actions/actions";
import data from "../../../data.json";

const ServiceAddress = () => {
   const dispatch = useDispatch();
   const dropdownState = data.dropdownState;

   const [formData, setFormData] = useState({
      streetAddress: "",
      aptSuite: "",
      city: "",
      selectedOption: "",
      zip: "",
      textarea: "",
   });

   const handleChange = (e) => {
      const { name, value } = e.target;

      if (name === "zip") {
         let numericValue = value.replace(/\D/g, "");

         if (numericValue.length > 6) {
            numericValue = numericValue.slice(0, 6);
         }

         setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: numericValue,
         }));
         dispatch(setServiceFormData({ ...formData, [name]: numericValue }));
      } else {
         setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
         }));
         dispatch(setServiceFormData({ ...formData, [name]: value }));
      }
   };

   const handleDropdownChange = (selectedOption) => {
      setFormData((prevFormData) => ({
         ...prevFormData,
         selectedOption: selectedOption.label,
      }));
      dispatch(setServiceFormData({ ...formData, selectedOption: selectedOption.label }));
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
                     value={formData.streetAddress}
                     onChange={handleChange}
                     name="streetAddress"
                  />
                  <CustomizeInput
                     type="text"
                     placeholder="Apt/Suite"
                     value={formData.aptSuite}
                     onChange={handleChange}
                     name="aptSuite"
                  />
               </div>
               <div className="grid grid-cols-3 w-full">
                  <CustomizeInput
                     type="text"
                     placeholder="City"
                     value={formData.city}
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
                     value={formData.zip}
                     onChange={handleChange}
                     name="zip"
                  />
               </div>
               <div className="w-full">
                  <CustomizeTextarea
                     placeholder="Include notes such as access codes and parking instructions here. (optional)"
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

export default ServiceAddress;
