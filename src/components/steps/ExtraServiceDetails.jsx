import React from "react";
import CustomDropdown from "../CustomDropdown";

const timingData = [
   {
      value: "option1",
      label: "09:00 AM",
   },
   {
      value: "option2",
      label: "10:00 AM",
   },
];

const ExtraServiceDetails = () => {
   const handleDropdownChange = (option) => {
      console.log(option.label);
   };

   return (
      <section className="flex justify-center items-center w-full">
         <div className="mb-4 w-1/3 mr-3"></div>
         <div className="mb-4 w-1/3 mr-3">
            <CustomDropdown
               options={timingData}
               onChange={handleDropdownChange}
               defaultValue="Select time"
            />
         </div>
         <div className="mb-4 w-1/3"></div>
      </section>
   );
};

export default ExtraServiceDetails;
